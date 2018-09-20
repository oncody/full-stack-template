const projectConfig = require('../config');
const devConfig = require('./dev-webpack-config');
const objectMerger = require('../../object-merger');

const config = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      }
    ]
  }
};

if (projectConfig.environment === projectConfig.development) {
  objectMerger.merge(config, devConfig);
}

module.exports = config;
