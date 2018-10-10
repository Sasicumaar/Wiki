var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMNationality = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMNationality.js");
    router.get("/", HRMNationality.HRMNationalityGet);
    router.post("/add", HRMNationality.HRMNationalityInsert);
    return router;
};
