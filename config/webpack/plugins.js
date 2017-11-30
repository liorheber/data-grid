const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

const uglifyJSPlugin = new UglifyJSPlugin();

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./config/webpack/index.html"
});

const definePlugin = env =>
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(env)
    }
  });

module.exports = {
  hotModuleReplacementPlugin,
  definePlugin,
  uglifyJSPlugin,
  htmlWebpackPlugin
};
