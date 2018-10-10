var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var employee = require(globals.ROUTE_DIR + path.sep + "employee.js");
    router.post("/add", employee.addNewEmployee);
    router.get("/", employee.getAllEmployee);
    router.put("/update", employee.modifyEmployee); 
    return router;
};
