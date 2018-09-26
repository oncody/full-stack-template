const rules = [
  {
    // enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          // presets: [
            // 'flow'
          // ]
        }
      },
      {
        loader: 'eslint-loader',
        options: {
          fix: true,
          configFile: '.eslintrc.js'
        }
      }
    ]
  }
];

module.exports = {
  module: {
    rules
  }
};
