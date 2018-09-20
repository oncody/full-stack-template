module.exports = (env, argv) => {
  let config = {};

  if (argv.mode === 'development') {
    config.stats = 'none';
    config.devtool = 'cheap-module-eval-source-map';
  }

  return config;
};
