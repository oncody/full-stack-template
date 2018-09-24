const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const serverConfig = require('./config');

const config = {
  mode: 'production',
  externals: [
    nodeExternals()
  ],
  target: 'node',
  output: {
    path: serverConfig.buildPath,
    filename: serverConfig.outputName
  },
  entry: [
    serverConfig.entryFile
  ],
  plugins: [
    new CleanWebpackPlugin([
      serverConfig.buildPath], {
        allowExternal: true,
      }
    )
  ]
};

module.exports = config;
