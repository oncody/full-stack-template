const CleanWebpackPlugin = require('clean-webpack-plugin');
const projectConfig = require('../config');
const commonWebpackConfig = require('../common/webpack-config');
const devConfig = require('./dev-webpack-config');
const prodConfig = require('./prod-webpack-config');
const objectMerger = require('../../object-merger');

const config = {
  target: 'node',
  entry: [
    './server/server'
  ],
  plugins: [
    new CleanWebpackPlugin([
      'dist'
    ])
  ]
};

module.exports = () => {
  if (projectConfig.environment === 'development') {
    objectMerger.merge(config, devConfig());
  } else {
    objectMerger.merge(config, prodConfig());
  }

  objectMerger.merge(config, commonWebpackConfig());
  return config;
};
