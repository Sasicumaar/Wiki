var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Division = app_model.Division;
var globals = connector.__globals;

exports.HRMDivisionInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var DivisionName = req.body.DivisionName;
    var DivisionCode = req.body.DivisionCode;
    var CreatedBy = req.body.CreatedBy;
    
    var division = new Division({
        CompanyID : CompanyID,
        DivisionName : DivisionName,
        DivisionCode : DivisionCode,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    division.save().then(function (Result) {
        res.json(globals.createResponse("HRMDivision Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMDivisionGet = function (req, res) {
    Division.findAll().then(List => res.json(List))
};