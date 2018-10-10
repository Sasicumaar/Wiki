var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMDivision = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMDivision.js");
    router.get("/", HRMDivision.HRMDivisionGet);
    router.post("/add", HRMDivision.HRMDivisionInsert);
    return router;
};
