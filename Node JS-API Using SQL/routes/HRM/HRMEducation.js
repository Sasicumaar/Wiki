var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Education = app_model.Education;
var globals = connector.__globals;

exports.HRMEducationInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var EducationLevel = req.body.EducationLevel;
    var EducationName = req.body.EducationName;
    var CreatedBy = req.body.CreatedBy;
    
    var education = new Education({
        CompanyID : CompanyID,
        EducationLevel : EducationLevel,
        EducationName : EducationName,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    education.save().then(function (Result) {
        res.json(globals.createResponse("HRMEducation Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMEducationGet = function (req, res) {
    Education.findAll().then(List => res.json(List))
};