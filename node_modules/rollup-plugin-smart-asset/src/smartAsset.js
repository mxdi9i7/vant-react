import { promisify } from "util"
import { stat, readFile, copyFileSync } from "fs"
import { join, extname, dirname, parse, relative, normalize } from "path"

import { createFilter } from "rollup-pluginutils"
import { sync as mkdirpSync } from "mkdirp"
import { getType } from "mime"
import MagicString from "magic-string"

import { hashFile } from "./hashFile"

const statAsync = promisify(stat)
const readFileAsync = promisify(readFile)

// replace windows paths to unix paths on windows platform
function normalizeSlashes(path) {
  return path.replace(/\\/g, "/")
}

function addTrailingSlash(path) {
  return path.endsWith("/") ? path : path + "/"
}

function markRelative(path) {
  if (path.substr(0, 3) === "../" || path.substr(0, 2) === "./" || path.substr(0, 1) === "/") {
    return path
  }
  return "./" + path
}

function moduleMatchesExtList(filename, extensions) {
  return extensions.length ? extensions.indexOf(extname(filename)) !== -1 : true
}

function getAssetPublicPath(assetName, publicPath) {
  // standard path.join() corrupts protocol prefix "http://"
  return publicPath ? addTrailingSlash(publicPath) + assetName : assetName
}

function getAssetImportPath(assetName, assetsPath, context = {}) {
  if (context.preserveModules) {
    const wrapperFile = join(context.outputDir, relative(dirname(context.inputFile), context.moduleId + ".js"))
    const assetFile = join(context.outputDir, getAssetImportPath(assetName, assetsPath))
    const assetRel = relative(dirname(wrapperFile), assetFile)
    return markRelative(normalizeSlashes(normalize(assetRel)))
  }
  return markRelative(normalizeSlashes(assetsPath ? join(assetsPath, assetName) : assetName))
}

async function getAssetName(filename, opts) {
  const parsedPath = parse(filename)

  const hash = (opts.nameFormat && /\[hash\]/.test(opts.nameFormat)) || opts.useHash
    ? await hashFile(filename, opts.hashOptions.hash, opts.hashOptions.encoding,
      opts.hashOptions.maxLength)
    : ""

  if (opts.nameFormat) {
    return opts.nameFormat
      .replace(/\[name\]/g, parsedPath.name)
      .replace(/\[ext\]/g, parsedPath.ext)
      .replace(/\[hash\]/g, hash)
  }

  if (opts.useHash) {
    return opts.keepName
      ? parsedPath.name + "~" + hash + parsedPath.ext
      : hash + parsedPath.ext
  }

  return parsedPath.name + parsedPath.ext
}

function validateOptions(options) {
  if (options.preserveModules) {
    if (!options.outputDir) {
      throw new Error("Unable to detect asset import path without outputDir provided (should be the same as output.dir)")
    }
    if (typeof options.outputDir !== "string") {
      throw new Error("Option outputDir must be a string (should be the same as output.dir)")
    }
    if (!options.inputFile) {
      throw new Error("Unable to detect asset import path without inputFile provided (should be the same as input.file)")
    }
    if (typeof options.inputFile !== "string") {
      throw new Error("Option inputFile must be a string (should be the same as input.file)")
    }
  }
  // TODO: add checks for other options
}

async function detectOpMode(filename, options) {
  if (options.url === "inline" && options.maxSize) {
    const stat = await statAsync(filename)
    return stat.size <= options.maxSize * 1024 ? "inline" : "copy"
  }
  return options.url
}

async function readFileAsDataURL(filename) {
  const buffer = await readFileAsync(filename)
  const base64 = buffer.toString("base64")
  const mime = getType(filename)
  return `data:${mime};base64,${base64}`
}

export default (initialOptions = {}) => {
  const defaultOptions = {
    url: "rebase",            // mode: "rebase" | "inline" | "copy"
    rebasePath: ".",          // rebase all asset urls to this directory
    maxSize: 14,              // max size in kbytes that will be inlined, fallback is copy
    publicPath: null,         // relative to html page where asset is referenced
    assetsPath: null,         // relative to rollup output
    emitFiles: true,
    preserveModules: false,   // should be the same as rollup's preserveModules
    outputDir: null,          // should be the same as output.dir value if preserveModules is set
    inputFile: null,          // should be the same as input.file value if preserveModules is set
    useHash: false,           // alias for nameFormat: [hash][ext]
    keepName: false,          // alias for nameFormat: [name]~[hash][ext] (requires useHash)
    nameFormat: null,         // valid patterns: [name] | [ext] | [hash]
    hashOptions: {            // hash options:
      hash: "sha1",           // "sha1", "md5", "metrohash128", "xxhash64" etc or Hash-like class
      encoding: "base52",     // "hex", "base64", "base62", "base58", "base52" etc
      maxLength: 8            // truncate final digest to specific length
    },
    keepImport: false,        // keeps import to let another bundler to process the import
    sourceMap: false,         // add source map if transform() hook is invoked
    sourcemap: false,         // alias for sourceMap
    include: undefined,       // micromatch or array if micromatch patterns relative to process.cwd()
    exclude: undefined,       // micromatch or array if micromatch patterns relative to process.cwd()
    extensions: [             // list of extensions to process by this plugin
      ".svg",
      ".gif",
      ".png",
      ".jpg"
    ]
  }

  const options = {
    ...defaultOptions,
    ...initialOptions,
    hashOptions: {
      ...defaultOptions.hashOptions,
      ...initialOptions.hashOptions
    }
  }

  // unset default extensions of include/exclude are used
  if (options.include || options.exclude) {
    options.extensions = []
  }

  const idComment = "/* loaded by smart-asset */"

  const assetsToCopy = []

  const filter = createFilter(options.include, options.exclude)

  const plugin = {
    name: "smart-asset",

    buildStart(inputOptions) {
      if (inputOptions.preserveModules) {
        options.preserveModules = inputOptions.preserveModules
      }

      // autodetect inputFile based on rollup input options if rollup supports that
      if (!options.inputFile) {
        options.inputFile = inputOptions.input
      }

      validateOptions(options)

      // clear assets from previous build cycle
      assetsToCopy.length = 0
    },

    async load(id) {
      if (!moduleMatchesExtList(id, options.extensions) || !filter(id)) {
        return
      }

      const mode = await detectOpMode(id, options)

      let value

      if (mode === "inline") {
        value = await readFileAsDataURL(id)
      } else if (mode === "copy") {
        const assetName = await getAssetName(id, options)
        assetsToCopy.push({ assetName, filename: id })
        if (options.keepImport) {
          value = getAssetImportPath(assetName, options.assetsPath, {
            moduleId: id,
            preserveModules: options.preserveModules,
            outputDir: options.outputDir,
            inputFile: options.inputFile
          })
        } else {
          value = getAssetPublicPath(assetName, options.publicPath)
        }
      } else if (mode === "rebase") {
        const assetName = relative(options.rebasePath, id)
        value = options.keepImport
          ? getAssetImportPath(assetName)
          : getAssetPublicPath(assetName, options.publicPath)
      } else {
        this.warn(`Invalid mode: ${mode}`)
        return
      }

      const code = options.keepImport && (mode === "copy" || mode === "rebase")
        ? `${idComment}\nexport default require(${JSON.stringify(value)})`
        : `${idComment}\nexport default ${JSON.stringify(value)}`

      return code
    },

    // some plugins could load asset content, so plugin's load() hook
    // will never be executed, but transform() hook works even in that case
    async transform(code, id) {
      const alreadyProcessed = code.startsWith(idComment)

      if (!alreadyProcessed) {
        const newCode = await plugin.load.call(this, id)

        if (newCode) {
          if (options.sourceMap || options.sourcemap) {
            const magicString = new MagicString(code)
            magicString.overwrite(0, code.length - 1, newCode)
            return {
              code: magicString.toString(),
              map: magicString.generateMap({ hires: true })
            }
          } else {
            return {
              code: newCode,
              map: { mappings: "" }
            }
          }
        }
      }
    },

    generateBundle(outputOptions, bundle, isWrite) {
      if (isWrite && assetsToCopy.length && options.emitFiles) {
        const outputDir = outputOptions.dir ? outputOptions.dir : dirname(outputOptions.file)
        const assetsRootPath = join(outputDir, options.assetsPath || "")

        let dirInitialized = false

        for (const asset of assetsToCopy) {
          const assetPath = join(assetsRootPath, asset.assetName)

          // since all assets are going to the same directory it is enough to
          // create directory only once and free IOPS for more valuable things
          try {
            if (!dirInitialized) {
              mkdirpSync(dirname(assetPath))
              dirInitialized = true
            }
          } catch (e) {
            this.warn(`Unable to create directory: ${dirname(assetPath)}`)
          }

          try {
            copyFileSync(asset.filename, assetPath)
          } catch (e) {
            this.warn(`Unable to copy asset: ${asset.filename}`)
          }
        }
      }
    }
  }

  return plugin
}
