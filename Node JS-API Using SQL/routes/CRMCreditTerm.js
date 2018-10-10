var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var CrediTerms = app_model.CrediTerms;
var globals = connector.__globals;

exports.InsertCrediTerm = function (req, res) {
    var CompanyID = req.body.CompanyID;
    var CreditTerm = req.body.CreditTerm;
    var CreatedBy = req.body.CreatedBy;

    var crediTerm = new CrediTerms({
        CompanyID: CompanyID,
        CreditTerm: CreditTerm,
        CreatedBy: CreatedBy,
    });
    crediTerm.save().then(function (Result) {
        res.json(globals.createResponse("CrediTerms Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};

exports.GETAll = function (req, res) {
    CrediTerms.findAll().then(List => res.json(List))
}; 