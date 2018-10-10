var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var SECWorkflow = require(globals.ROUTE_DIR + path.sep  + "Security" + path.sep +  "SECWorkflow.js");
    router.get("/", SECWorkflow.SECWorkflowGet);
    router.post("/add", SECWorkflow.SECWorkflowInsert);
    router.put("/update", SECWorkflow.SECWorkflowUpdate);
    router.get("/GetByCompanyID",SECWorkflow.SECWorkflowByCompany);
    router.post("/GetByTypeName", SECWorkflow.GetbyTypeName);
    return router;
};
