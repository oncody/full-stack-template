const CleanWebpackPlugin = require('clean-webpack-plugin');
const objectMerger = require('object-array-merger');
const serverConfig = require('./config');
const projectConfig = require('../../config');
const commonWebpackConfig = require('../../webpack-config');

const config = {
  mode: 'production',
  target: 'node',
  output: {
    path: projectConfig.productionBuildPath,
    filename: serverConfig.outputName
  },
  entry: [
    serverConfig.entryFile
  ],
  plugins: [
    new CleanWebpackPlugin([
      projectConfig.productionBuildPath
    ], {
      allowExternal: true
    })
  ]
};

objectMerger.merge(config, commonWebpackConfig);

module.exports = config;
