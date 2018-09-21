const path = require('path');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const BUILD_DIRECTORY = 'build';
const PUBLIC_DIRECTORY = 'public';


module.exports = {
  port: 8080,
  buildDirectory: BUILD_DIRECTORY,
  buildPath: '' + path.resolve(BUILD_DIRECTORY),
  publicBuildDirectory: PUBLIC_DIRECTORY,
  publicBuildPath: '' + path.resolve(BUILD_DIRECTORY, PUBLIC_DIRECTORY),
  serverOutputName: 'server.js',
  clientOutputName: 'client.js',
  serverEntryFile: './server/server',
  clientEntryFile: './client/client',
  htmlEntryFile: './client/index.html',
  publicPath: '/',
  devtool: 'cheap-module-eval-source-map',
  development: DEVELOPMENT,
  production: PRODUCTION,
  // environment: DEVELOPMENT
  environment: PRODUCTION
};
