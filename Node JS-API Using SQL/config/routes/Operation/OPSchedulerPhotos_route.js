var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var OPSchedulerPhotos = require(globals.ROUTE_DIR + path.sep + "Operation" + path.sep + "OPSchedulerPhotos.js");
    router.get("/", OPSchedulerPhotos.GETAll);
    router.post("/add", OPSchedulerPhotos.InsertPhotos);
    return router;
};
