var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var CoverageArea = app_model.CoverageArea;
var sequelize = connector.sequelize;
var globals = connector.__globals;

exports.Insert = function (req, res) {
    var CompanyID = req.body.CompanyID;
    var AffectedArea = req.body.AffectedArea;
    var AreaCode = req.body.AreaCode; 
    var CreatedBy = req.body.CreatedBy;

    var oPCoverageArea = new CoverageArea({
        CompanyID:  CompanyID,
        AffectedArea : AffectedArea, 
        AreaCode : AreaCode,
        CreatedBy: CreatedBy
    });
    oPCoverageArea.save().then(function (Result) {
        res.json(globals.createResponse("Insert Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.GETAll = function (req, res) { 
    sequelize.query('SELECT * FROM OPCoverageArea',
        { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
    ).then(projects => {
        res.send(projects)
    });
}; 