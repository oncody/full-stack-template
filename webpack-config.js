const rules = [
  {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      fix: true
    }
  }
];

module.exports = {
  module: {
    rules
  }
};
