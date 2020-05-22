import { safeRequire } from "./safeRequire"

const xxhash = safeRequire("xxhash")

// xxhash requires seed to be provided
const seed = 0xcafebabe

/**
 * Wraps xxhash to implement Hash-compliant `update()` and pass mandatory seed.
 */
export class XXHashWrapper {
  constructor(size) {
    if (!xxhash) {
      throw new Error("Unable to find xxhash module")
    }

    if (size !== 64 && size !== 32) {
      throw new Error(`Invalid xxhash size: ${size}`)
    }

    const XXHash = size === 64 ? xxhash.XXHash64 : xxhash

    this.hasher = new XXHash(seed)
  }

  update(data) {
    this.hasher.update(data)
    return this
  }

  digest(encoding) {
    return this.hasher.digest(encoding)
  }
}
