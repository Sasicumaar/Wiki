var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var JobTitle = app_model.JobTitle;
var globals = connector.__globals;

exports.HRMJobTitleInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var JobTitle = req.body.JobTitle;
    var CreatedBy = req.body.CreatedBy;
    
    var jobtitle = new JobTitle({
        CompanyID : CompanyID,
        JobTitle : JobTitle,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    jobtitle.save().then(function (Result) {
        res.json(globals.createResponse("HRMJobTitle Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMJobTitleGet = function (req, res) {
    JobTitle.findAll().then(List => res.json(List))
};