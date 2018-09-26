const oncodyEslintConfig = require('oncody-eslint-config');

let eslintConfig = {
  parser: 'babel-eslint',
  plugins: [
    // 'flowtype',
    'flowtype-errors'
  ],
  extends: [
    'plugin:flowtype/recommended'
  ]
};

eslintConfig = Object.assign(oncodyEslintConfig, eslintConfig);
// eslintConfig.parserOptions.parser = 'babel-eslint';
eslintConfig.rules['flowtype-errors/show-errors'] = 'error';
eslintConfig.rules['flowtype-errors/show-warnings'] = 'warn';

// console.log(eslintConfig);

module.exports = eslintConfig;
