const merge = require("webpack-merge");

const common = require("./webpack.common.js");
const { uglifyJSPlugin, definePlugin } = require("./plugins");

module.exports = merge(common, {
  plugins: [uglifyJSPlugin, definePlugin("production")]
});
