module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "node 8", modules: false }]
  ],
  env: {
    test: {
      presets: [
        ["@babel/preset-env", { targets: "node 8", modules: "cjs" }]
      ]
    }
  }
}
