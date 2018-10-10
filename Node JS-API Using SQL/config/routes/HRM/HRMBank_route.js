var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var HRMBank = require(globals.ROUTE_DIR + path.sep + "HRM" + path.sep  + "HRMBank.js");
    router.get("/", HRMBank.HRMBankGet);
    router.post("/add", HRMBank.HRMBankInsert);
    router.put("/update", HRMBank.HRMBankUpdate);
    return router;
};
