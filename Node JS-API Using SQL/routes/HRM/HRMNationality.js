var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Nationality = app_model.Nationality;
var globals = connector.__globals;

exports.HRMNationalityInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var NationalityCode = req.body.NationalityCode;
    var Nationality = req.body.Nationality;
    var CreatedBy = req.body.CreatedBy;
    
    var nationality = new Nationality({
        CompanyID : CompanyID,
        NationalityCode : NationalityCode,
        Nationality : Nationality,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    nationality.save().then(function (Result) {
        res.json(globals.createResponse("HRMNationality Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMNationalityGet = function (req, res) {
    Nationality.findAll().then(List => res.json(List))
};