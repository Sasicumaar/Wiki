var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var EmploymentStatus = app_model.EmploymentStatus;
var globals = connector.__globals;

exports.HRMEmploymentStatusInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var EmploymentStatus = req.body.EmploymentStatus;
    var CreatedBy = req.body.CreatedBy;
    
    var employmentstatus = new EmploymentStatus({
        CompanyID : CompanyID,
        EmploymentStatus : EmploymentStatus,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    employmentstatus.save().then(function (Result) {
        res.json(globals.createResponse("HRMEmploymentStatus Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMEmploymentStatusGet = function (req, res) {
    EmploymentStatus.findAll().then(List => res.json(List))
};