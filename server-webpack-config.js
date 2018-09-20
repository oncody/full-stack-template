const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const hotWebpackClient = 'webpack/hot/poll?500';
const hotWebpackLog = 'webpack/hot/log';

module.exports = {
  entry: [
    hotWebpackClient,
    './server/server'
  ],
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: 500,
  },
  stats: 'none',
  target: 'node',
  mode: 'none',
  devtool: 'cheap-module-eval-source-map',
  externals: [
    nodeExternals(
      {
        whitelist: [
          hotWebpackClient,
          hotWebpackLog
        ]
      }
    )
  ],
  plugins: [
    new StartServerPlugin('main.js'),
    new CleanWebpackPlugin(['dist']),
    new FriendlyErrorsWebpackPlugin()
  ]
};
