var express = require("express");
var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var SECUserRole = require(globals.ROUTE_DIR + path.sep  + "Security"+ path.sep +  "SECUserRole.js");
   router.get("/", SECUserRole.SECUserRoleGet);
    router.post("/add", SECUserRole.SECUserRoleInsert);
    router.get("/:ID", SECUserRole.GetSECUserRole);    
    router.put("/:ID", SECUserRole.PutSECUserRole);
    router.delete("/:ID", SECUserRole.DeleteSECUserRole);
    return router;
};
