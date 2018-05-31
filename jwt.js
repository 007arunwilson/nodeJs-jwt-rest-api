var jwt = require("jsonwebtoken");
require("dotenv").load(); // HASH_KEY will get from .env file and loaded here

// const tokenOptions = {
//   issuer: "travalour",
//   subject: "auth-token",
//   expiresIn: "1h"
// };
// var token = jwt.sign(
//   { uid: "54", ses: "yrh84658352" },
//   process.env.HASH_KEY,
//   tokenOptions
// );
// console.log("Token Generated : ", token);

//Verifying token
const tokenToDecode =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXMiOiJBU0RGR0hKS0wiLCJ1aWQiOiI4NSIsInN1YiI6ImF1dGgtdG9rZW4iLCJpc3MiOiJ0cmF2YWxvdXIiLCJleHAiOjE1Mjc3ODk0NzIsImlhdCI6MTUyNzc4MjI3Mn0.qJ2P8-IxrlaQmr4LxzdFxbVxx47OOszfxX_oOt0RO9E";
var tokenDecoded = jwt.verify(tokenToDecode, process.env.HASH_KEY);

jwt.verify(
  tokenToDecode,
  process.env.HASH_KEY,
  { issuer: "travalour", subject: "auth-token" },
  function(err, payload) {
    // if token alg != RS256,  err == invalid signature

    console.log(err, payload);
  }
);

//console.log(tokenDecoded);
