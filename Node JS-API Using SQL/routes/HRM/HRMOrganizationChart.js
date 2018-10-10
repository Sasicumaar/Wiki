var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var OrganizationChart = app_model.OrganizationChart;
var globals = connector.__globals;

exports.HRMOrganizationChartInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var OrganizationChart = req.body.OrganizationChart;
    var CreatedBy = req.body.CreatedBy;
    
    var organizationchart = new OrganizationChart({
        CompanyID : CompanyID,
        OrganizationChart : OrganizationChart,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    organizationchart.save().then(function (Result) {
        res.json(globals.createResponse("HRMOrganizationChart Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMOrganizationChartGet = function (req, res) {
    OrganizationChart.findAll().then(List => res.json(List))
};