var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Calender = app_model.Calender;
var globals = connector.__globals;

exports.HRMCalenderInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var EventType = req.body.EventType;
    var EventTitle = req.body.EventTitle;
    var Description = req.body.Description;
    var StartDate = req.body.StartDate;
    var EndDate = req.body.EndDate;
    var CreatedBy = req.body.CreatedBy;
    
    var calender = new Calender({
        CompanyID : CompanyID,
        EventType : EventType,
        EventTitle : EventTitle,
        Description : Description,
        StartDate : StartDate,  
        EndDate : EndDate,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    calender.save().then(function (Result) {
        res.json(globals.createResponse("HRMCalender Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMCalenderGet = function (req, res) {
    Calender.findAll().then(List => res.json(List))
};