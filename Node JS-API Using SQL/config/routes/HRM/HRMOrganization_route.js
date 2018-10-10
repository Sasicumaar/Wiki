var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMOrganization = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMOrganization.js");
    router.get("/", HRMOrganization.HRMOrganizationGet);
    router.post("/add", HRMOrganization.HRMOrganizationInsert);
    return router;
};
