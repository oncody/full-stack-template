// presets: [
// 'flow'
// ]

const babelLoader = {
  loader: 'babel-loader',
  options: {}
};

const eslintLoader = {
  loader: 'eslint-loader',
  options: {
    fix: true,
    configFile: '.eslintrc.js'
  }
};

// enforce: 'pre',
const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      babelLoader,
      eslintLoader
    ]
  }
];

module.exports = {
  module: {
    rules
  }
};
