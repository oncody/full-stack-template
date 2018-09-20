const http = require('http');

const server = http.createServer(require('./express-server'));
let currentExpressServer = require('./express-server');

const PORT = 8080;

console.log(`App listening on port ${PORT}!\n`);
server.listen(PORT);

if (module.hot) {
  module.hot.accept('./express-server', () => {
    if (currentExpressServer) {
      server.removeListener('request', currentExpressServer);
    }
    try {
      const newExpressServer = require('./express-server');
      if (newExpressServer) {
        currentExpressServer = newExpressServer;
        server.on('request', currentExpressServer);
      }
    } catch (err) {
      console.log(`Error refreshing server routes: ${err}`);
    }
  });
}
