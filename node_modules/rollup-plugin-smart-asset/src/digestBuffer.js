import { createHash } from "./createHash"
import { baseEncode } from "./baseEncode"

/**
 * Calculates hash and encodes it for buffer.
 */
export function digestBuffer(buffer, hash, encoding) {
  // process hex encoding and fast path for base64
  if (encoding === "hex") {
    return createHash(hash)
      .update(buffer)
      .digest(encoding)
  }

  if (encoding === "base64") {
    return createHash(hash)
      .update(buffer)
      .digest(encoding)
      // base64url: replace "+/"" with url-safe characters "-_" and strip "=" padding
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "")
  }

  const resultBuffer = createHash(hash)
    .update(buffer)
    .digest("buffer")

  return baseEncode(resultBuffer, encoding)
}
