const nodeExternals = require('webpack-node-externals');

const config = {
  externals: [
    nodeExternals()
  ]
};

module.exports = () => config;
