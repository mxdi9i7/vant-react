# Rollup Smart Asset Plugin

## Overview

Rollup plugin to rebase, inline or copy assets referenced from the JavaScript code.

## Usage

```js
import smartAsset from "rollup-plugin-smart-asset"

const smartAssetOpts = { ... }

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/index.js",
    format: "iife"
  },
  plugins: [
    ...
    smartAsset(smartAssetOpts)
    ...
  ]
}
```

## Configuration

For libraries it is recommended to use `inline` or `copy` mode with `keepImport`
option to delegate bundling to consumer's package bundler. Asset hasing is not
needed for this case and it is safe to set `useHash: false` and `keepName: true`.

For applications it is also recommended to use `inline` or `copy` mode with
enabled by default hashing.

Default settings are set to be the same as in `postcss-smart-asset` to have one
config for both of them.

Main options:

- `url`: Mode: `rebase` (default), `inline` and `copy`
- `extensions`: What file extensions to process, defaults to
  `[".svg", ".gif", ".png", ".jpg"]` unless `exclude` or `include` are used.
  This option is ignored if `include` or `exclude` options are used.
- `include`: Micromatch pattern or array of micromatch patterns for files that
  need to be processed by this plugin.
- `exclude`: Micromatch pattern or array of micromatch patterns for files that
  NOT need to be processed by this plugin.
- `emitFiles`: Disable generating files if `false`, by default it's `true` -
  useful when generating bundle for SSR.

For more details about `include` / `exclude` syntax please refer to:
<https://github.com/micromatch/micromatch>

## Mode: rebase

Rebase asset references to be relative to specific directory.

Output:

```js
// without keepImport
export default "public_path_to_asset"
// with keepImport
export default require("relative_path_to_asset_from_bundle")
```

Options:

- `publicPath`: Reference file from JS using this path, relative to html page
  where asset is referenced. Could be relative, absolute or CDN.
- `rebasePath`: Rebase all asset urls to this directory, defaults to current directory.
- `keepImport`: Keep import, so consumer of your package could define their own
  bundle configuration.
- `sourceMap`: Set to `true` to keep source map.

## Mode: inline

Inline assets as base64 urls directly in source code.

Keep in mind, all options for `copy` mode will be used if falled back to `copy` mode.

Output:

```js
export default "data:{mimeType};base64,{data}"
```

Options:

- `maxSize`: Max file size to inline, fallback is `copy` mode, defaults to `14` kbytes.

## Mode: copy

Copy asset to target directory and rebase original references to point to it
depending on provided configuration.

Output:

```js
// without keepImport
export default "public_path_to_asset"
// with keepImport
export default require("relative_path_to_asset_from_bundle")
// + file is copied to target directory
```

Options:

- `publicPath`: Reference file from JS using this path, relative to html page
  where asset is referenced. Could be relative, absolute or CDN.
- `assetsPath`: Copy assets to this directory, relative to rollup output.
- `useHash`: Use `[hash][ext]` instead of default `[name][ext]`.
- `keepName`: Use both hash and name `[name]~[hash][ext]` if `useHash` is `true`.
- `nameFormat`: Use custom name format using these patterns `[name]`, `[ext]`,
  `[hash]`.
- `hashOptions`: Hash options.
  - `hash`: Any valid Node's crypto hashing algorithm e.g. `sha1`, `md5` etc,
    Hash-like class (see: https://nodejs.org/api/crypto.html#crypto_class_hash),
    `metrohash64` or `metrohash128` if `metrohash` is installed,
    `xxhash32` or `xxhash64` if `xxhash` is installed.
    Default is `sha1`.
  - `encoding`: Hash encoding `hex`, `base64` `base62`, `base58`, `base52`,
    `base49`, `base36`, `base32`, `base26`. Default is `base52`.
  - `maxLength`: Maximum length of returned digest. Keep in mind that
    reducing it increases collison probability. Default is `8`.
- `keepImport`: Keep import, so consumer of your package could define their own
  bundle configuration.

**Preserve Modules**

Rollup `preserveModules: true` is supported but additional context is required
for the plugin to properly detect rebased path to the asset.

Additional options needed:

- `outputDir`: Path to output dir, should be the same as `output.dir`, can't be
  automatically detected and neeed to be explicitly passed.
- (optional) `preserveModules`: Set to `true` to activate mode, can be
  automatically detected.
- (optional) `inputFile`: Path to main entry, should be the same as `input.file`,
  can be automatically detected. Object and array values for `input.file` are not
  supported.

## Migration

### Migration from v1.x to v2.x

Changes:

- Option `hashOptions.hash` defaults to `sha1` instead of `metrohash128`.
- Removed dependencies: `asset-hash`.
- These dependencies are now optional: `xxhash` and `metrohash`.

The default configuration is changed in favor of default hash functions
that are available in NodeJS without requirement to build any native
extensions during `npm install`.

If you would like to use ultra fast `metrohash64` or `metrohash128` hashes
then do `npm install metrohash` and set `hashOptions.hash` to `metrohash64`
or `metrohash128`.

If you would like to use ultra fast `xxhash32` or `xxhash64` hashes
then do `npm install xxhash` and set `hashOptions.hash` to `xxhash32`
or `xxhash64`.

## Alternatives

## rollup-plugin-url

<https://github.com/rollup/rollup-plugin-url>

`rollup-plugin-url` has fewer options, doesn't work if asset is already loaded
by another plugin (by sourcemaps, for example) and doesn't have `keepImport`
like option.

## postcss-smart-asset

<https://github.com/sebastian-software/postcss-smart-asset>

`postcss-smart-asset` works for assets referenced from CSS, but doesn't work for
assets imported from JavaScript.

## rollup-plugin-rebase

<https://github.com/sebastian-software/rollup-plugin-rebase>

`rollup-plugin-rebase` designed for libraries, not for applications. This plugin
designed for all use cases.

## Contribution

PRs are very welcome!

## License

MIT
