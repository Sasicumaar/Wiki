var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMEmploymentStatus = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMEmploymentStatus.js");
    router.get("/", HRMEmploymentStatus.HRMEmploymentStatusGet);
    router.post("/add", HRMEmploymentStatus.HRMEmploymentStatusInsert);
    return router;
};
