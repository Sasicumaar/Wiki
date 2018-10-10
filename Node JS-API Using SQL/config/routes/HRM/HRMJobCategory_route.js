var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMJobCategory = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMJobCategory.js");
    router.get("/", HRMJobCategory.HRMJobCategoryGet);
    router.post("/add", HRMJobCategory.HRMJobCategoryInsert);
    return router;
};
