const projectConfig = require('../config');
const devConfig = require('./dev-webpack-config');
const objectMerger = require('../../object-merger');

// module: {
//   rules: [
//     {
//       test: /\.js$/,
//       exclude: /node_modules/,
//       use: [
//         {
//           loader: 'eslint-loader',
//           options: {
//             fix: true
//             configFile: 'eslintrc.js'
// }
// }
// ]
// }
// ]
// }
const config = {};

if (projectConfig.environment === projectConfig.development) {
  objectMerger.merge(config, devConfig);
}

module.exports = config;
