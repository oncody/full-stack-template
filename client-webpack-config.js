const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpackHotLog = require('webpack/hot/log');
const commonWebpackConfig = require('./common-webpack-config');

webpackHotLog.setLogLevel('none');

let config = {
  mode: 'none',
  target: 'web',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './client/client.js'
  ],
  output: {
    publicPath: '/'
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: './client/index.html'}),
  ]
};

module.exports = Object.assign(config, commonWebpackConfig);
