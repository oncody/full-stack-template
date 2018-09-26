const path = require('path');

const BUILD_DIRECTORY = 'build';
const DEV_BUILD_DIRECTORY = 'dev-server';
const WEB_OUTPUT_DIRECTORY = 'web';

module.exports = {
  port: 8080,
  webpackSourceMap: 'cheap-module-eval-source-map',
  webpackPollMs: 200,
  publicRoute: '/',
  developmentEnvironment: 'development',
  developmentBuildPath: `${path.resolve(DEV_BUILD_DIRECTORY)}`,
  developmentWebOutputPath: `${path.resolve(DEV_BUILD_DIRECTORY, WEB_OUTPUT_DIRECTORY)}`,
  productionEnvironment: 'production',
  productionBuildPath: `${path.resolve(BUILD_DIRECTORY)}`,
  productionWebOutputPath: `${path.resolve(BUILD_DIRECTORY, WEB_OUTPUT_DIRECTORY)}`
};
