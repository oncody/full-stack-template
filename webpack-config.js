const eslintLoader = {
  loader: 'eslint-loader',
  options: {
    fix: true,
    configFile: '.eslintrc.js'
  }
};

const rules = [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }
  // {
  //   test: /\.js$/,
  //   exclude: /node_modules/,
  //   use: [
  //     eslintLoader
  //   ]
  // }
];

const extensions = [ '.tsx', '.ts', '.js' ];

module.exports = {
  module: {
    rules
  },
  resolve: {
    extensions
  },
};
