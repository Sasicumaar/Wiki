var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMMembership = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMMembership.js");
    router.get("/", HRMMembership.HRMMembershipGet);
    router.post("/add", HRMMembership.HRMMembershipInsert);
    return router;
};
