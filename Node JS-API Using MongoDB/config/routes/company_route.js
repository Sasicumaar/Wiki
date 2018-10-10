var express = require("express");
var path=require("path");
var connector = require(path.join(__appbase,"config","connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var company = require(globals.ROUTE_DIR + path.sep + "company.js");
    router.post("/add", company.addNewCompany);
    router.get("/", company.getAllCompany);
    router.put("/update", company.modifyCompany);

    return router;
};
