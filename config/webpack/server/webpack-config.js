const CleanWebpackPlugin = require('clean-webpack-plugin');
const projectConfig = require('../../config');
const commonWebpackConfig = require('../common/webpack-config');
const devConfig = require('./dev-webpack-config');
const prodConfig = require('./prod-webpack-config');
const objectMerger = require('../../../object-merger');

const config = {
  target: 'node',
  output: {
    path: projectConfig.buildPath,
    filename: projectConfig.serverOutputName
  },
  entry: [
    projectConfig.serverEntryFile
  ],
  plugins: [
    new CleanWebpackPlugin([
      projectConfig.buildPath
    ])
  ]
};

if (projectConfig.environment === projectConfig.development) {
  objectMerger.merge(config, devConfig);
} else {
  objectMerger.merge(config, prodConfig);
}

objectMerger.merge(config, commonWebpackConfig);

module.exports = config;
