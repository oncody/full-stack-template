const projectConfig = require('../config');
const devConfig = require('./dev-webpack-config');
const objectMerger = require('../../object-merger');

const config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true
              // configFile: 'eslintrc.js'
            }
          }
        ]
      }
    ]
  }
};

module.exports = () => {
  if (projectConfig.environment === 'development') {
    objectMerger.merge(config, devConfig());
  }

  return config;
};
