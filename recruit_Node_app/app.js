"use strict"
const express = require("express");
const bodyParser = require("body-parser");
const colors = require('colors');
const app = express();
const routes = require("./routes")(express);
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log(process.env.MONGO_DB_URL)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, If-Modified-Since,cache-control");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

Object.keys(routes).forEach((route) => {

  app.use("/" + route.toLowerCase(), routes[route])
});

if(process.env.NODE_ENV==="production"){
  app.use(express.static("client/build"));
  app.get('*',(req,res)=>{
    const path = require('path');
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
}

app.use(function(req, res, next) {
res.send("No method implemented on requested route.");
});

app.set('port', process.env.PORT || 3002);

app.listen(app.get('port'), '0.0.0.0');
console.log(('Express server listening on port : ' + app.get('port')).bold.green);