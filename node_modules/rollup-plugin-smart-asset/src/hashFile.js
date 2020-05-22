import { readFile } from "fs"
import { promisify } from "util"
import { digestBuffer } from "./digestBuffer"

const readFileAsync = promisify(readFile)

/**
 * Calculates hash for specific file using hash name, encoding and max length.
 */
export async function hashFile(filename, hash, encoding, maxLength) {
  const buffer = await readFileAsync(filename)

  const digest = digestBuffer(buffer, hash, encoding)

  return !maxLength || digest.length <= maxLength
    ? digest
    : digest.slice(0, maxLength)
}
