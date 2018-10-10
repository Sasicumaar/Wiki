var express = require("express");
var path=require("path");
var connector = require(path.join(__appbase,"config","connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var login = require(globals.ROUTE_DIR + path.sep + "login.js");

 	router.post("/", login.loginuser);
 	router.post("/changePassword", login.userchangePassword);
    router.post("/resetPassword", login.userResetPassword); 

    return router;
};
