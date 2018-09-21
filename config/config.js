const path = require('path');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const BUILD_DIRECTORY = 'build';
const PUBLIC_DIRECTORY = 'public';
const SOURCE_DIRECTORY = 'src';

module.exports = {
  port: 8080,
  buildDirectory: BUILD_DIRECTORY,
  buildPath: '' + path.resolve(BUILD_DIRECTORY),
  publicBuildDirectory: PUBLIC_DIRECTORY,
  publicBuildPath: '' + path.resolve(BUILD_DIRECTORY, PUBLIC_DIRECTORY),
  serverOutputName: 'server.js',
  clientOutputName: 'client.js',
  serverEntryFile: '' + path.resolve(SOURCE_DIRECTORY, 'server', 'server.js'),
  clientEntryFile: '' + path.resolve(SOURCE_DIRECTORY, 'client', 'client.js'),
  htmlEntryFile: '' + path.resolve(SOURCE_DIRECTORY, 'client', 'index.html'),
  publicPath: '/',
  devtool: 'cheap-module-eval-source-map',
  pollMs: 500,
  development: DEVELOPMENT,
  production: PRODUCTION,
  environment: DEVELOPMENT
  // environment: PRODUCTION
};
