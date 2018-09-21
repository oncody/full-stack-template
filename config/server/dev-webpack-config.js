const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const projectConfig = require('../config');
const hotWebpackClient = `webpack/hot/poll?${projectConfig.pollMs}`;

const config = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: projectConfig.pollMs
  },
  externals: [
    nodeExternals({
      whitelist: [
        hotWebpackClient,
        'webpack/hot/log'
      ]
    })
  ],
  entry: [
    hotWebpackClient
  ],
  plugins: [
    new StartServerPlugin(projectConfig.serverOutputName)
  ]
};

module.exports = config;
