var fs = require("fs");
var mongoose = require('mongoose');
var Promise = require("bluebird");


mongoose.connect("mongodb+srv://mehmood:chohan12@recruit-njjnl.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser:true} , (err, res) => {
  if(err){
    console.log(err);
  }
  if (res) {
    console.log('MongoDB Connected Successfully!');
  }
});
var db = {};
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach((file) => {
    var cd = file.replace(".js", "");
    db[cd] = Promise.promisifyAll(require("./" + file)(mongoose));
  });

db.mongoose = mongoose;
mongoose.set('useCreateIndex', true)
module.exports = db;