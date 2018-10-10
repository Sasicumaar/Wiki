var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var License = app_model.License;
var globals = connector.__globals;

exports.HRMLicenseInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var licenses = req.body.licenses;
    var institution = req.body.institution;
    var CreatedBy = req.body.CreatedBy;
    
    var license = new License({
        CompanyID : CompanyID,
        licenses : licenses,
        institution : institution,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    license.save().then(function (Result) {
        res.json(globals.createResponse("HRMLicense Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMLicenseGet = function (req, res) {
    License.findAll().then(List => res.json(List))
};