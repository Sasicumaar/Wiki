var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var VisaTypes = app_model.VisaTypes;
var globals = connector.__globals;

exports.HRMVisaTypesInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var VisaTypes = req.body.VisaTypes;
    var CreatedBy = req.body.CreatedBy;
    
    var visatypes = new VisaTypes({
        CompanyID : CompanyID,
        VisaTypes : VisaTypes,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    visatypes.save().then(function (Result) {
        res.json(globals.createResponse("HRMVisaTypes Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMVisaTypesGet = function (req, res) {
    VisaTypes.findAll().then(List => res.json(List))
};