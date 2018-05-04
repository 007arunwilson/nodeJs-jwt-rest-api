const net = require('net');

const portCheck = portNumber => (
  new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once('listening', () => {
      resolve(portNumber);
    });
    server.once('error', (err) => {
      reject(err);
    });
    server.listen(portNumber);
  })
);

module.exports = portCheck;

// const net = require('net');

// const server = net.createServer();

// server.once('listening', () => {
// // close the server if listening doesn't fail
//   server.close();
// });

// server.once('error', err => console.log('error on listening', err));

// server.listen('3000');

// var server = net.createServer();

// server.once('error', function(err) {
//   if (err.code === 'EADDRINUSE') {
//     // port is currently in use
//   }
// });

// server.once('listening', function() {
//   // close the server if listening doesn't fail
//   server.close();
// });

// server.listen(/* put the port to check here */);
