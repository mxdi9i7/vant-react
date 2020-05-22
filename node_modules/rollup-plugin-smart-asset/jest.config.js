module.exports = {
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
}
