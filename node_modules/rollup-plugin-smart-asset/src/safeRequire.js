/**
 * Safely import module, returns null if module is not available.
 */
export function safeRequire(moduleName) {
  try {
    return require(moduleName)
  } catch (e) {
    return null
  }
}
