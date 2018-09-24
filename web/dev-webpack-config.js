const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const commonConfig = require('../config');
const webConfig = require('./config');
const webpackLog = require('webpack/hot/log');

webpackLog.setLogLevel('none');

const config = {
  mode: 'development',
  stats: 'none',
  devtool: commonConfig.devtool,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    webConfig.entryFile
  ],
  plugins: [
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: webConfig.entryHtmlFile
    })
  ],
  target: 'web',
  output: {
    path: webConfig.outputPath,
    filename: webConfig.outputName,
    publicPath: webConfig.publicRoute
  }
};

module.exports = config;
