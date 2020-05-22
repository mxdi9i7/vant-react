import crypto from "crypto"

import { safeRequire } from "./safeRequire"

describe("safeRequire()", () => {
  it("loads existing library", () => {
    const lib = safeRequire("crypto")
    expect(lib).toBe(crypto)
  })

  it("returns null on non-existing library", () => {
    const lib = safeRequire("O_o")
    expect(lib).toBe(null)
  })
})
