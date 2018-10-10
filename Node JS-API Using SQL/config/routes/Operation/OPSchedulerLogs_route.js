var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var OPSchedulerLogs = require(globals.ROUTE_DIR + path.sep + "Operation" + path.sep + "OPSchedulerLogs.js");
    router.get("/", OPSchedulerLogs.GETAll);
    router.post("/add", OPSchedulerLogs.Insert);
    return router;
};
