var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var Authorization = require(globals.ROUTE_DIR + path.sep + "Authorization" + path.sep + "Authorization.js"); 
    router.post("/login", Authorization.Login);
    router.post("/logout", Authorization.Logout);
    return router;
};
