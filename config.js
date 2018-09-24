const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

module.exports = {
  port: 8080,
  devtool: 'cheap-module-eval-source-map',
  pollMs: 500,
  development: DEVELOPMENT,
  production: PRODUCTION,
  environment: DEVELOPMENT
};
