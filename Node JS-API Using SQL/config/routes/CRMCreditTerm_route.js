var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var CRMCreditTerms = require(globals.ROUTE_DIR + path.sep + "CRMCreditTerm.js");
    router.get("/", CRMCreditTerms.GETAll);
    router.post("/add", CRMCreditTerms.InsertCrediTerm);
    return router;
};
