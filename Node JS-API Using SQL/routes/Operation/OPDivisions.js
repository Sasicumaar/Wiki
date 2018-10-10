var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var OPDivisions = app_model.OPDivisions;
var sequelize = connector.sequelize;
var globals = connector.__globals;

exports.InsertDivision = function (req, res) {
    var CompanyID = req.body.CompanyID;
    var Name = req.body.Name;
    var Description = req.body.Description; 
    var CreatedBy = req.body.CreatedBy;

    var oPDivisions = new OPDivisions({
        CompanyID:  CompanyID,
        Name : Name,
        Description : Description, 
        CreatedBy: CreatedBy,
    });
    oPDivisions.save().then(function (Result) {
        res.json(globals.createResponse("OPDivisions Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.GETAll = function (req, res) { 
    sequelize.query('SELECT * FROM OPDivisions',
        { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
    ).then(projects => {
        res.send(projects)
    });
}; 