var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var CostCentre = app_model.CostCentre;
var globals = connector.__globals;

exports.HRMCostCentreInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var CostCentreName = req.body.CostCentreName;
    var CostCentreCode = req.body.CostCentreCode;
    var CreatedBy = req.body.CreatedBy;
    
    var costcentre = new CostCentre({
        CompanyID : CompanyID,
        CostCentreName : CostCentreName,
        CostCentreCode : CostCentreCode,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    costcentre.save().then(function (Result) {
        res.json(globals.createResponse("HRMCostCentre Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMCostCentreGet = function (req, res) {
    CostCentre.findAll().then(List => res.json(List))
};