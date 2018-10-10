var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Material = app_model.Material;
var sequelize = connector.sequelize;
var globals = connector.__globals;

exports.Insert = function (req, res) {
    var CompanyID = req.body.CompanyID;
    var PestType = req.body.PestType;
    var MaterialName = req.body.MaterialName;
    var MaterialCode = req.body.MaterialCode;
    var CreatedBy = req.body.CreatedBy;

    var oPMaterial = new Material({
        CompanyID:  CompanyID,
        PestType : PestType,
        MaterialName : MaterialName, 
        MaterialCode : MaterialCode, 
        CreatedBy: CreatedBy
    });
    oPMaterial.save().then(function (Result) {
        res.json(globals.createResponse("Materials Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.GETAll = function (req, res) { 
    sequelize.query('SELECT * FROM OPMaterials',
        { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
    ).then(projects => {
        res.send(projects)
    });
}; 