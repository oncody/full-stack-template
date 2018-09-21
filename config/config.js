const path = require('path');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

module.exports = {
  port: 8080,
  buildPath: `${path.resolve('build')}`,
  publicBuildPath: `${path.resolve('build', 'public')}`,
  serverOutputName: 'server.js',
  clientOutputName: 'client.js',
  serverEntryFile: String(path.resolve('src', 'server', 'server.js')),
  clientEntryFile: String(path.resolve('src', 'client', 'client.js')),
  htmlEntryFile: `${path.resolve('src', 'client', 'index.html')}`,
  publicRoute: '/',
  devtool: 'cheap-module-eval-source-map',
  pollMs: 500,
  development: DEVELOPMENT,
  production: PRODUCTION,
  environment: DEVELOPMENT
};
