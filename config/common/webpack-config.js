const devConfig = require('./dev-webpack-config');

let config = {
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    objectMerger.merge(config, devConfig());
  }

  return config;
};
