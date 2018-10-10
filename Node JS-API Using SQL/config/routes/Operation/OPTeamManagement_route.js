var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var OPTeamManagement = require(globals.ROUTE_DIR + path.sep + "Operation" + path.sep + "OPTeamManagement.js");
    router.get("/", OPTeamManagement.GETAll);
    router.post("/add", OPTeamManagement.Insert);
    return router;
};
