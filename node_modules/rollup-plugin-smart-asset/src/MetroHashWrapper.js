import { safeRequire } from "./safeRequire"

const metrohash = safeRequire("metrohash")

/**
 * Wraps MetroHash instance to implement Hash-compliant `digest()` implementation.
 *
 * MetroHash has `digest()` implementation that always return hex string.
 */
export class MetroHashWrapper {
  constructor(size) {
    if (!metrohash) {
      throw new Error("Unable to find metrohash module")
    }

    if (size !== 128 && size !== 64) {
      throw new Error(`Invalid metrohash size: ${size}`)
    }

    const MetroHash = size === 128 ? metrohash.MetroHash128 : metrohash.MetroHash64

    this.hasher = new MetroHash()
  }

  update(data) {
    this.hasher.update(data)
    return this
  }

  digest(encoding) {
    if (encoding === "hex") {
      return this.hasher.digest()
    }
    const hex = this.hasher.digest()
    const buffer = Buffer.from(hex, "hex")
    return encoding === "buffer" ? buffer : buffer.toString(encoding)
  }
}
