var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Country = app_model.Country;
var globals = connector.__globals;

exports.HRMCountryInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var CountryCode = req.body.CountryCode;
    var CountryName = req.body.CountryName;
    var CreatedBy = req.body.CreatedBy;
    
    var country = new Country({
        CompanyID : CompanyID,
        CountryCode : CountryCode,
        CountryName : CountryName,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    country.save().then(function (Result) {
        res.json(globals.createResponse("HRMCountry Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMCountryGet = function (req, res) {
    Country.findAll().then(List => res.json(List))
};