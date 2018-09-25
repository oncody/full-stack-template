const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

module.exports = {
  port: 8080,
  webpackSourceMap: 'cheap-module-eval-source-map',
  webpackPollMs: 200,
  publicRoute: '/',
  development: DEVELOPMENT,
  production: PRODUCTION,
  environment: PRODUCTION
};
