var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var OPPhotoRemark = require(globals.ROUTE_DIR + path.sep + "Operation" + path.sep + "OPPhotoRemark.js");
    router.get("/", OPPhotoRemark.GETAll);
    router.post("/add", OPPhotoRemark.Insert);
    return router;
};
