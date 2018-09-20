const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const commonWebpackConfig = require('./common-webpack-config');

const hotWebpackClient = 'webpack/hot/poll?500';

let config = {
  entry: [
    hotWebpackClient,
    './server/server'
  ],
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: 500,
  },
  target: 'node',
  mode: 'none',
  externals: [
    nodeExternals(
      {
        whitelist: [
          hotWebpackClient,
          'webpack/hot/log'
        ]
      }
    )
  ],
  plugins: [
    new FriendlyErrorsPlugin(),
    new StartServerPlugin('main.js'),
    new CleanWebpackPlugin(['dist']),
  ]
};

module.exports = Object.assign(config, commonWebpackConfig);
console.log(module.exports);
