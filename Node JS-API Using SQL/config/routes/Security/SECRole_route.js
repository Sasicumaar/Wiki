var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var SECRole = require(globals.ROUTE_DIR + path.sep  + "Security"+ path.sep + "SECRole.js");
    router.get("/", SECRole.GETAll);
    router.post("/add", SECRole.SECRoleInsert);
    router.get("/:ID", SECRole.GetSECRolebyID);    
    router.put("/:ID", SECRole.PutSECRole);
    router.delete("/:ID", SECRole.DeleteSECRole);
    return router;
};
