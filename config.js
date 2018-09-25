const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

module.exports = {
  port: 8080,
  webpackSourceMap: 'cheap-module-eval-source-map',
  webpackPollMs: 200,
  publicRoute: '/',
  productionBuildPath: `${path.resolve('build')}`,
  developmentBuildPath: `${path.resolve('dev-build')}`,
  development: DEVELOPMENT,
  production: PRODUCTION,
  environment: PRODUCTION
};
