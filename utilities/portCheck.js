const net = require('net');

const portCheck = portNumber => (
  new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once('listening', () => {
      server.close();
      resolve(portNumber);
    });
    server.once('error', (err) => {
      reject(err);
    });
    server.listen(portNumber);
  })
);

module.exports = portCheck;
