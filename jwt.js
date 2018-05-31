var jwt = require("jsonwebtoken");
require("dotenv").load(); // HASH_KEY will get from .env file and loaded here

const tokenOptions = {
  issuer: "travalour",
  subject: "auth-token",
  expiresIn: "1h"
};
var token = jwt.sign(
  { uid: "54", ses: "yrh84658352" },
  process.env.HASH_KEY,
  tokenOptions
);
console.log("Token Generated : ", token);
