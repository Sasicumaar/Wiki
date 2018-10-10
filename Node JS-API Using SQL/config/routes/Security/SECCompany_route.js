var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var SECCompany = require(globals.ROUTE_DIR + path.sep  + "Security" + path.sep + "SECCompany.js");
    router.get("/", SECCompany.SECCompanyGet);
    router.post("/add", SECCompany.SECCompanyInsert);
    router.get("/:ID", SECCompany.GetSECCompany);
    router.put("/:ID", SECCompany.PutSECCompany);
    router.delete("/:ID", SECCompany.DeleteSECCompany);

    return router;
};
