var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMCountry = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMCountry.js");
    router.get("/", HRMCountry.HRMCountryGet);
    router.post("/add", HRMCountry.HRMCountryInsert);
    return router;
};
