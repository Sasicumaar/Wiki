var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Language = app_model.Language;
var globals = connector.__globals;

exports.HRMLanguageInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var Languages = req.body.Languages;
    var CreatedBy = req.body.CreatedBy;
    
    var language = new Language({
        CompanyID : CompanyID,
        Languages : Languages,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    language.save().then(function (Result) {
        res.json(globals.createResponse("HRMLanguage Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMLanguageGet = function (req, res) {
    Language.findAll().then(List => res.json(List))
};