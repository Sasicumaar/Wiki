var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var SchedulerLogs = app_model.SchedulerLogs;
var sequelize = connector.sequelize;
var globals = connector.__globals;

exports.Insert = function (req, res) {
    var CompanyID = req.body.CompanyID;
    var ServiceID = req.body.ServiceID;
    var Status = req.body.Status; 
    var StartDate = req.body.StartDate; 
    var EndDate = req.body.EndDate;  
    var ServiceOn = req.body.ServiceOn;  
    var CreatedBy = req.body.CreatedBy;

    var oPSchedulerLogs = new SchedulerLogs({
        CompanyID:  CompanyID,
        ServiceID : ServiceID, 
        Status : Status,
        StartDate : StartDate,
        EndDate : EndDate,
        ServiceOn : ServiceOn,
        CreatedBy: CreatedBy
    });
    oPSchedulerLogs.save().then(function (Result) {
        res.json(globals.createResponse("Insert Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.GETAll = function (req, res) { 
    sequelize.query('SELECT * FROM OPSchedulerLogs',
        { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
    ).then(projects => {
        res.send(projects)
    });
}; 