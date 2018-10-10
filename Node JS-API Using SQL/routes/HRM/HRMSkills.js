var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Skills = app_model.Skills;
var globals = connector.__globals;

exports.HRMSkillsInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var Name = req.body.Name;
    var Description = req.body.Description;
    var CreatedBy = req.body.CreatedBy;
    
    var skills = new Skills({
        CompanyID : CompanyID,
        Name : Name,
        Description : Description,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    skills.save().then(function (Result) {
        res.json(globals.createResponse("HRMSkills Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMSkillsGet = function (req, res) {
    Skills.findAll().then(List => res.json(List))
};