import { baseEncode } from "./baseEncode"

describe("baseEncode()", () => {
  test.each([
    ["base26", "gilijwe"],
    ["base32", "2u87tcn"],
    ["base36", "wb6zqs"],
    ["base49", "gVVrQY"],
    ["base52", "fhkPye"],
    ["base58", "3YDjMS"],
    ["base62", "28dBJy"],
    ["base64", "B0c2V0"]
  ])(
    "works with %s",
    (encoding, expected) => {
      const buffer = Buffer.from("test")
      const encoded = baseEncode(buffer, encoding)
      expect(encoded).toEqual(expected)
    }
  )

  it("throws error on invalid encoding", () => {
    const buffer = Buffer.from("test")
    expect(() => baseEncode(buffer, "test")).toThrow()
  })
})
