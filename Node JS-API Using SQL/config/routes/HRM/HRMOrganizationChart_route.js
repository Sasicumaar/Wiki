var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMOrganizationChart = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMOrganizationChart.js");
    router.get("/", HRMOrganizationChart.HRMOrganizationChartGet);
    router.post("/add", HRMOrganizationChart.HRMOrganizationChartInsert);
    return router;
};
