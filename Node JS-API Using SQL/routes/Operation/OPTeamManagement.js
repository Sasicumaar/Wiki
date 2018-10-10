var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var TeamManagement = app_model.TeamManagement;
var sequelize = connector.sequelize;
var globals = connector.__globals;

exports.Insert = function (req, res) {
    var CompanyID = req.body.CompanyID;
    var TeamCode = req.body.TeamCode;
    var TeamName = req.body.TeamName; 
    var TeamLead = req.body.TeamLead; 
    var TeamMembers = req.body.TeamMembers;  
    var CreatedBy = req.body.CreatedBy;

    var oPTeamManagement = new TeamManagement({
        CompanyID:  CompanyID,
        TeamCode : TeamCode, 
        TeamName : TeamName,
        TeamLead : TeamLead,
        TeamMembers : TeamMembers,
        CreatedBy: CreatedBy
    });
    oPTeamManagement.save().then(function (Result) {
        res.json(globals.createResponse("Insert Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.GETAll = function (req, res) { 
    sequelize.query('SELECT * FROM OPTeamManagement',
        { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
    ).then(projects => {
        res.send(projects)
    });
}; 