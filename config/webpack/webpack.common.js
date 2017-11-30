const path = require("path");
const { babelLoader, cssLoader } = require("./loaders");
const { htmlWebpackPlugin } = require("./plugins");

module.exports = {
  entry: "./src/index.js",
  plugins: [htmlWebpackPlugin],
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "out")
  },
  module: {
    rules: [babelLoader, cssLoader]
  }
};
