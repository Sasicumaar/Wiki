var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMSkills = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep + "HRMSkills.js");
    router.get("/", HRMSkills.HRMSkillsGet);
    router.post("/add", HRMSkills.HRMSkillsInsert);
    return router;
};
