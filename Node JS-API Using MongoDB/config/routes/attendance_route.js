var express = require("express");
var path=require("path");
var connector = require(path.join(__appbase,"config","connector.js"));
var globals = connector.__globals;
var router = express.Router();

exports.init_route = function () {
    var attendance = require(globals.ROUTE_DIR + path.sep + "attendance.js");
    router.post("/add", attendance.addNewAttendance);
    router.get("/", attendance.getAllAttendance);
    router.put("/update", attendance.modifyAttendance);
    router.post("/datefilter", attendance.getAlldatefilterAttendance); 
    router.post("/delete", attendance.deleteAttendance); 
    
    return router;
};
