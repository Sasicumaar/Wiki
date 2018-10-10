var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMCalender = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMCalender.js");
    router.get("/", HRMCalender.HRMCalenderGet);
    router.post("/add", HRMCalender.HRMCalenderInsert);
    return router;
};
