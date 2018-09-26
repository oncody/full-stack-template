// @flow

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const objectMerger = require('object-array-merger');
const serverConfig = require('./config');
const projectConfig = require('../config');
const commonWebpackConfig = require('../webpack-config');
const hotWebpackClient = `webpack/hot/poll?${projectConfig.webpackPollMs}`;

const config = {
  mode: 'development',
  stats: 'none',
  devtool: projectConfig.webpackSourceMap,
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: projectConfig.webpackPollMs
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
      projectConfig.developmentBuildPath
    ], {
      allowExternal: true
    })
  ],
  target: 'node',
  output: {
    path: projectConfig.developmentBuildPath,
    filename: serverConfig.outputName
  }
};

objectMerger.merge(config, commonWebpackConfig);

module.exports = config;
