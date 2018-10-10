var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMVisaTypes = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMVisaTypes.js");
    router.get("/", HRMVisaTypes.HRMVisaTypesGet);
    router.post("/add", HRMVisaTypes.HRMVisaTypesInsert);
    return router;
};
