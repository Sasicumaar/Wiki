var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var OPPestType = app_model.OPPestType;
var sequelize = connector.sequelize;
var globals = connector.__globals;

exports.InsertPestType = function (req, res) {
    var CompanyID = req.body.CompanyID;
    var DivisionName = req.body.DivisionName;
    var PestType = req.body.PestType;
    var PestCode = req.body.PestCode;
    var CreatedBy = req.body.CreatedBy;

    var oPPestType = new OPPestType({
        CompanyID:  CompanyID,
        DivisionName : DivisionName,
        PestType : PestType, 
        PestCode:PestCode,
        CreatedBy: CreatedBy,
    });
    oPPestType.save().then(function (Result) {
        res.json(globals.createResponse("OPPestType Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.GETAll = function (req, res) { 
    sequelize.query('SELECT * FROM OPPestType',
        { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
    ).then(projects => {
        res.send(projects)
    });
}; 