const eslintLoader = {
  loader: 'eslint-loader',
  options: {
    fix: true,
    configFile: '.eslintrc.js'
  }
};

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      eslintLoader
    ]
  }
];

const extensions = [ '.js' ];

module.exports = {
  module: {
    rules
  },
  resolve: {
    extensions
  },
};
