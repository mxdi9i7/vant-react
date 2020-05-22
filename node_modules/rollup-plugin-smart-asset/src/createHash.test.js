import { createHash as createNodeHash } from "crypto"

import { createHash } from "./createHash"
import { MetroHashWrapper } from "./MetroHashWrapper"
import { XXHashWrapper } from "./XXHashWrapper"

jest.mock("xxhash", () => {
  const xxhash = jest.fn()
  xxhash.XXHash64 = jest.fn()
  return xxhash
})

jest.mock("metrohash", () => {
  return {
    MetroHash64: jest.fn(),
    MetroHash128: jest.fn()
  }
})

jest.mock("crypto")

describe("createHash()", () => {
  it("supports xxhash32 hash", () => {
    const xxhash = require("xxhash")
    const hash = createHash("xxhash32")
    expect(hash).toBeInstanceOf(XXHashWrapper)
    expect(hash.hasher).toBeInstanceOf(xxhash)
  })

  it("supports xxhash64 hash", () => {
    const xxhash = require("xxhash")
    const hash = createHash("xxhash64")
    expect(hash).toBeInstanceOf(XXHashWrapper)
    expect(hash.hasher).toBeInstanceOf(xxhash.XXHash64)
  })

  it("supports metrohash64 hash", () => {
    const metrohash = require("metrohash")
    const hash = createHash("metrohash64")
    expect(hash).toBeInstanceOf(MetroHashWrapper)
    expect(hash.hasher).toBeInstanceOf(metrohash.MetroHash64)
  })

  it("supports metrohash128 hash", () => {
    const metrohash = require("metrohash")
    const hash = createHash("metrohash128")
    expect(hash).toBeInstanceOf(MetroHashWrapper)
    expect(hash.hasher).toBeInstanceOf(metrohash.MetroHash128)
  })

  it("supports custom hashes", () => {
    const hashFunc = jest.fn()
    const hash = createHash(hashFunc)
    expect(hash).toBeInstanceOf(hashFunc)
  })

  it("supports crypto hashes", () => {
    const Hasher = jest.fn()
    createNodeHash.mockImplementationOnce(() => {
      return new Hasher()
    })
    const hash = createHash("sha1")
    expect(createNodeHash).toBeCalledWith("sha1")
    expect(hash).toBeInstanceOf(Hasher)
  })
})
