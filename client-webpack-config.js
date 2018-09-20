const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpackHotLog = require('webpack/hot/log');

webpackHotLog.setLogLevel('none');

module.exports = {
  mode: 'none',
  target: 'web',
  stats: 'none',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './client/client.js'
  ],
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: './client/index.html'}),
    new FriendlyErrorsWebpackPlugin()
  ]
};
