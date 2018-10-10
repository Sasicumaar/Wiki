var express = require("express");
var path=require("path");
var connector = require(path.join(__appbase,"config","connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var user = require(globals.ROUTE_DIR + path.sep + "user.js");
    router.post("/add", user.addNewUser);
    router.get("/", user.getAllUser); 
    router.put("/update", user.modifyUser);
    router.post("/delete", user.deleteUser); 
    return router;
};
