var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var OPPestType = require(globals.ROUTE_DIR + path.sep  + "Operation" + path.sep + "OPPestType.js");
    router.get("/", OPPestType.GETAll);
    router.post("/add", OPPestType.InsertPestType);
    return router;
};
