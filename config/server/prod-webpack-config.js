const nodeExternals = require('webpack-node-externals');

const config = {
  externals: [
    nodeExternals()
  ],
  node: {
    __dirname: false
  }
};

module.exports = config;
