var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var OPDivisions = require(globals.ROUTE_DIR + path.sep  + "Operation" + path.sep + "OPDivisions.js");
    router.get("/", OPDivisions.GETAll);
    router.post("/add", OPDivisions.InsertDivision);
    return router;
};
