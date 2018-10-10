var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var OPMaterial = require(globals.ROUTE_DIR + path.sep + "Operation" + path.sep + "OPMaterial.js");
    router.get("/", OPMaterial.GETAll);
    router.post("/add", OPMaterial.Insert);
    return router;
};
