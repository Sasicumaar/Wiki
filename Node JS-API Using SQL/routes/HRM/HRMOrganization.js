var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Organization = app_model.Organization;
var globals = connector.__globals;

exports.HRMOrganizationInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var BusinessUnitName = req.body.BusinessUnitName;
    var BusinessUnitCode = req.body.BusinessUnitCode;
    var BusinessUnitLocation = req.body.BusinessUnitLocation;
    var CreatedBy = req.body.CreatedBy;
    
    var organization = new Organization({
        CompanyID : CompanyID,
        BusinessUnitName : BusinessUnitName,
        BusinessUnitCode : BusinessUnitCode,
        BusinessUnitLocation : BusinessUnitLocation,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    organization.save().then(function (Result) {
        res.json(globals.createResponse("HRMOrganization Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMOrganizationGet = function (req, res) {
    Organization.findAll().then(List => res.json(List))
};