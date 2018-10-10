var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var OPCoverageArea = require(globals.ROUTE_DIR + path.sep + "Operation" + path.sep + "OPCoverageArea.js");
    router.get("/", OPCoverageArea.GETAll);
    router.post("/add", OPCoverageArea.Insert);
    return router;
};
