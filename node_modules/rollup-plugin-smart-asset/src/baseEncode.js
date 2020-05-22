// mostly inspired by asset-hash package with some additional improvements:
// see https://github.com/sebastian-software/asset-hash/blob/master/src/index.js

import Big from "big.js"

const baseEncodeTables = {
  base26: "abcdefghijklmnopqrstuvwxyz",
  base32: "123456789abcdefghjkmnpqrstuvwxyz", // no 0lio
  base36: "0123456789abcdefghijklmnopqrstuvwxyz",
  base49: "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", // no lIO
  base52: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  base58: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", // no 0lIO
  base62: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  base64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_" // modified Base64 for URL
}

/**
 * Encodes buffer using fast non-standard base-encoding.
 *
 * This implementation is not RFC4648-compliant so values produced by this function
 * and value produced by RFC4648-compliant base32/base64 won't be the same.
 */
export function baseEncode(buffer, base) {
  const encodeTable = baseEncodeTables[base]

  if (!encodeTable) {
    throw new Error(`Unsupported base encoding: ${base}`)
  }

  const baseNum = /\d+/.exec(base)[0]

  const length = buffer.length

  const orgDP = Big.DP
  const orgRM = Big.RM

  Big.DP = 0
  Big.RM = 0

  let current = new Big(0)
  for (let i = length - 1; i >= 0; i--) {
    current = current.times(256).plus(buffer[i])
  }

  let output = ""
  while (current.gt(0)) {
    output = encodeTable[current.mod(baseNum)] + output
    current = current.div(baseNum)
  }

  Big.DP = orgDP
  Big.RM = orgRM

  return output
}
