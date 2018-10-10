var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Service = app_model.Service;
var sequelize = connector.sequelize;
var globals = connector.__globals;

exports.Insert = function (req, res) {
    var CompanyID = req.body.CompanyID;
    var PestType = req.body.PestType;
    var Name = req.body.Name;
    var Code = req.body.Code;
    var CreatedBy = req.body.CreatedBy;

    var oPService = new Service({
        CompanyID:  CompanyID,
        PestType : PestType,
        Name : Name, 
        Code : Code, 
        CreatedBy: CreatedBy
    });
    oPService.save().then(function (Result) {
        res.json(globals.createResponse("Service Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.GETAll = function (req, res) { 
    sequelize.query('SELECT * FROM OPService',
        { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
    ).then(projects => {
        res.send(projects)
    });
}; 