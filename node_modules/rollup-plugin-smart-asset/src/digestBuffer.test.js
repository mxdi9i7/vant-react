import { digestBuffer } from "./digestBuffer"

import * as baseEncodeModule from "./baseEncode"

const baseEncodeSpy = jest.spyOn(baseEncodeModule, "baseEncode")

beforeEach(() => {
  baseEncodeSpy.mockClear()
})

describe("digestBuffer()", () => {
  test.each([
    ["hex", "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"],
    ["base64", "qUqP5cyxm6YcTAhz05Hph5gvu9M"],
    ["base52", "benUbeDxBJpGiCrKQBjxdVRekBwZT"]
  ])(
    "works with %s encoding",
    (encoding, expectedDigest) => {
      const buffer = Buffer.from("test")
      const actualDigest = digestBuffer(buffer, "sha1", encoding)
      const isCustomBase = /^base/.test(encoding) && encoding !== "base64"
      if (isCustomBase) {
        expect(baseEncodeSpy).toBeCalled()
      } else {
        expect(baseEncodeSpy).not.toBeCalled()
      }
      expect(actualDigest).toEqual(expectedDigest)
    }
  )
})
