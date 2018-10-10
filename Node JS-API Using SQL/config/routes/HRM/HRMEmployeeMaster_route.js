var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMEmployeeMaster = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMEmployeeMaster.js");
    router.get("/", HRMEmployeeMaster.HRMEmployeeMasterGet);
    router.post("/add", HRMEmployeeMaster.HRMEmployeeMasterInsert);
    return router;
};
