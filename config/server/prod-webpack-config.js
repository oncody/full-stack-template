const nodeExternals = require('webpack-node-externals');

let config = {
  externals: [
    nodeExternals()
  ],
};

module.exports = () => {
  return config;
};
