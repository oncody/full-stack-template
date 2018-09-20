const http = require('http');

const server = http.createServer(require('./express-server'));
let currentExpressServer = require('./express-server');

const PORT = 8080;

console.log(`App listening on port ${PORT}!\n`);
server.listen(PORT);

if (module.hot) {
  module.hot.accept('./express-server', () => {
    server.removeListener('request', currentExpressServer);
    currentExpressServer = require('./express-server');
    server.on('request', currentExpressServer);
  });
}
