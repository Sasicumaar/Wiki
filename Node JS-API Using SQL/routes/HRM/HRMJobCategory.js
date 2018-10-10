var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var JobCategory = app_model.JobCategory;
var globals = connector.__globals;

exports.HRMJobCategoryInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var Name = req.body.Name;
    var Code = req.body.Code;
    var Description = req.body.Description;
    var CreatedBy = req.body.CreatedBy;
    
    var jobcategory = new JobCategory({
        CompanyID : CompanyID,
        Name : Name,
        Code : Code,
        Description : Description,  
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    jobcategory.save().then(function (Result) {
        res.json(globals.createResponse("HRMJobCategory Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMJobCategoryGet = function (req, res) {
    JobCategory.findAll().then(List => res.json(List))
};