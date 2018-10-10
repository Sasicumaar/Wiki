var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMCostCentre = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMCostCentre.js");
    router.get("/", HRMCostCentre.HRMCostCentreGet);
    router.post("/add", HRMCostCentre.HRMCostCentreInsert);
    return router;
};
