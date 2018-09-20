const CleanWebpackPlugin = require('clean-webpack-plugin');
const commonWebpackConfig = require('../common/dev-webpack-config');
const devConfig = require('./dev-webpack-config');
const prodConfig = require('./prod-webpack-config');
const objectMerger = require('../../object-merger');

let config = {
  target: 'node',
  entry: [
    './server/server'
  ],
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    objectMerger.merge(config, devConfig());
  } else {
    objectMerger.merge(config, prodConfig());
  }

  return objectMerger.merge(config, commonWebpackConfig(env, argv));
};
