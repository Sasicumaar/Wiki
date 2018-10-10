var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var OPService = require(globals.ROUTE_DIR + path.sep + "Operation" + path.sep + "OPService.js");
    router.get("/", OPService.GETAll);
    router.post("/add", OPService.Insert);
    return router;
};
