const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

//parse requests of content-type - application/x-www-formurlencoded
app.use(bodyParser.urlencoded({extended:true}));

// parse requests of content-type - application/json
app.use(bodyParser.json());


// define a dirst & simple route

app.get('/',(req,res)=>{
    res.json({"message":"Welcome to cybernfoscriipter application."});
});


app.listen(3000,()=>{

    console.log('App listening in port 3000');

});
