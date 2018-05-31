const express = require("express");
const multer = require("multer");
const portCheck = require("./utilities/portCheck.js");
require("dotenv").load();

const appPortNumber = process.env.PORT||3006;

const Console = {
  new: console,
  protottype: console
};

const portCheckInstance = portCheck(appPortNumber);

const bodyParser = require("body-parser");

// create express app
const app = express();

// parse requests of content-type - application/x-www-formurlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Creating Storage
const Storage = multer.diskStorage({
  destination: function(req, file, callback) {
      callback(null, "./Images");
  },
  filename: function(req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

//Creating a multler object
const upload = multer({
  storage: Storage
}).array("imgUploader", 3); //Field name and max count


// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a dirst & simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to cyberinfoscripter application." });
});

app.post("/api/upload", function(req, res) {
  upload(req, res, function(err) {
      if (err) {
          return res.end("Something went wrong!");
      }
      return res.end("File uploaded sucessfully!.");
  });
});

portCheckInstance
  .then(portNumber => {
    app.listen(portNumber, () => {
      Console.new.log(`App listening in port ${portNumber}`);
    });
  })
  .catch(error => {
    Console.new.log(`Port not available due to ${error.errno}`);
    process.exit();
  });
