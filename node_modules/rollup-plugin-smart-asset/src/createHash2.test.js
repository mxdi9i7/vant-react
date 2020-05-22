import { createHash } from "./createHash"

jest.mock("xxhash", () => null)
jest.mock("metrohash", () => null)

describe("createHash()", () => {
  test.each([
    ["xxhash32", "xxhash"],
    ["xxhash64", "xxhash"],
    ["metrohash64", "metrohash"],
    ["metrohash128", "metrohash"]
  ])(
    "fails on %s hash if %s is not available",
    (hash, moduleName) => {
      expect(() => createHash(hash)).toThrow(`Unable to find ${moduleName} module`)
    }
  )
})
