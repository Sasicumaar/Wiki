var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMLanguage = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMLanguage.js");
    router.get("/", HRMLanguage.HRMLanguageGet);
    router.post("/add", HRMLanguage.HRMLanguageInsert);
    return router;
};
