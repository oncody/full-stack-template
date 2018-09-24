const path = require('path');

module.exports = {
  outputName: 'server.js',
  entryFile: String(path.resolve('server', 'src', 'server.js')),
  buildPath: `${path.resolve('build')}`,
};
