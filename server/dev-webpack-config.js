const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const commonConfig = require('../config');
const serverConfig = require('./config');
const hotWebpackClient = `webpack/hot/poll?${commonConfig.webpackPollMs}`;
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  mode: 'development',
  stats: 'none',
  devtool: commonConfig.webpackSourceMap,
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: commonConfig.webpackPollMs
  },
  externals: [
    nodeExternals({
      whitelist: [
        hotWebpackClient,
        'webpack/hot/log'
      ]
    })
  ],
  entry: [
    hotWebpackClient,
    serverConfig.entryFile
  ],
  plugins: [
    new FriendlyErrorsPlugin(),
    new StartServerPlugin(serverConfig.outputName),
    new CleanWebpackPlugin([
      serverConfig.buildPath
    ], {
      allowExternal: true
    })
  ],
  target: 'node',
  output: {
    path: serverConfig.buildPath,
    filename: serverConfig.outputName
  }
};

module.exports = config;
