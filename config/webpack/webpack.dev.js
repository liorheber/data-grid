const merge = require("webpack-merge");

const common = require("./webpack.common.js");
const { hotModuleReplacementPlugin, definePlugin } = require("./plugins");

module.exports = merge(common, {
  plugins: [hotModuleReplacementPlugin, definePlugin("dev")],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./out",
    hot: true
  }
});
