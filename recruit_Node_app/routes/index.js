module.exports = (app) => {

    const routes = {};
    const libs = require("../libs");
    var fs = require("fs");
    fs
      .readdirSync(__dirname)
      .filter((file) => {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
      })
      .forEach((file) => {
        var cd = file.replace(".js", "");
        routes[cd] = require("./" + file)(app, libs);
      });
  
    return routes;
  };