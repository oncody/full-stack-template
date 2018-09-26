const path = require('path');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const BUILD_DIRECTORY = 'build';
const DEV_BUILD_DIRECTORY = 'dev-build';
const WEB_OUTPUT_DIRECTORY = 'web';

module.exports = {
  port: 8080,
  webpackSourceMap: 'cheap-module-eval-source-map',
  webpackPollMs: 200,
  publicRoute: '/',
  productionWebOutputPath: `${path.resolve(BUILD_DIRECTORY, WEB_OUTPUT_DIRECTORY)}`,
  developmentWebOutputPath: `${path.resolve(DEV_BUILD_DIRECTORY, WEB_OUTPUT_DIRECTORY)}`,
  productionBuildPath: `${path.resolve(BUILD_DIRECTORY)}`,
  developmentBuildPath: `${path.resolve(DEV_BUILD_DIRECTORY)}`,
  development: DEVELOPMENT,
  production: PRODUCTION,
  environment: PRODUCTION
};
