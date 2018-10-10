var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMWorkWeek = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMWorkWeek.js");
    router.get("/", HRMWorkWeek.HRMWorkWeekGet);
    router.post("/add", HRMWorkWeek.HRMWorkWeekInsert);
    return router;
};
