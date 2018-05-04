const portCheck = require('./utilities/portCheck.js');

const portNumber = 3000;
portCheck(portNumber)
  .then(portNumberParam => console.log(`Port ${portNumberParam} is available`))
  .catch((error) => {
    console.log(`Port not available due to ${error.errno}`);
    process.exit();
  });
// const express = require('express');
// const bodyParser = require('body-parser');

// const Console = {
//   new: console,
//   protottype: console,
// };

// // create express app
// const app = express();

// // parse requests of content-type - application/x-www-formurlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());


// // define a dirst & simple route
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to cyberinfoscripter application.' });
// });


// app.listen(3009, () => {
//   Console.new.log('App listening in port 3009');
// });
