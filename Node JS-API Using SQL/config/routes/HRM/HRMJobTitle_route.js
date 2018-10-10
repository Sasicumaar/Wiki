var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMJobTitle = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMJobTitle.js");
    router.get("/", HRMJobTitle.HRMJobTitleGet);
    router.post("/add", HRMJobTitle.HRMJobTitleInsert);
    return router;
};
