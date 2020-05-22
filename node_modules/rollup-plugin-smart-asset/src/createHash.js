import { createHash as createNodeHash } from "crypto"

import { MetroHashWrapper } from "./MetroHashWrapper"
import { XXHashWrapper } from "./XXHashWrapper"

/**
 * Creates Hash-like hasher instance using hash name or Hash-like class.
 */
export function createHash(hash) {
  switch (hash) {
    case "xxhash32":
      return new XXHashWrapper(32)

    case "xxhash64":
      return new XXHashWrapper(64)

    case "metrohash64":
      return new MetroHashWrapper(64)

    case "metrohash128":
      return new MetroHashWrapper(128)

    default:
      if (typeof hash === "function") {
        const Hash = hash
        return new Hash()
      }
      return createNodeHash(hash)
  }
}
