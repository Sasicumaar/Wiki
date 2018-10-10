var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var SECUser = require(globals.ROUTE_DIR + path.sep + "Security" + path.sep +  "SECUser.js");
    router.get("/", SECUser.SECUserGet);
    router.post("/add", SECUser.SECUserInsert);
    router.get("/:ID", SECUser.GetSECUser);    
    router.put("/:ID", SECUser.PutSECUser);
    router.delete("/:ID", SECUser.DeleteSECUser);
    return router;
};
