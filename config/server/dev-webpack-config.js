const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const hotWebpackClient = 'webpack/hot/poll?500';

const config = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: 500
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
    new StartServerPlugin('main.js')
  ]
};

module.exports = () => config;
