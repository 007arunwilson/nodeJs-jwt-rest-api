const express = require('express');
const portCheck = require('./utilities/portCheck.js');

const appPortNumber = 3006;

const Console = {
  new: console,
  protottype: console,
};

const portCheckInstance = portCheck(appPortNumber);

const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-formurlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

Console.new.log(process.env);

// define a dirst & simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to cyberinfoscripter application.' });
});

portCheckInstance.then((portNumber) => {
  app.listen(portNumber, () => {
    Console.new.log(`App listening in port ${portNumber}`);
  });
}).catch((error) => {
  Console.new.log(`Port not available due to ${error.errno}`);
  process.exit();
});
