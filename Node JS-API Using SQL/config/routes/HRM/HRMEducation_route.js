var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMEducation = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMEducation.js");
    router.get("/", HRMEducation.HRMEducationGet);
    router.post("/add", HRMEducation.HRMEducationInsert);
    return router;
};
