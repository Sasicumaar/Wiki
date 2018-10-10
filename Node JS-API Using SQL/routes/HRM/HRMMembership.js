var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Membership = app_model.Membership;
var globals = connector.__globals;

exports.HRMMembershipInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var MembershipName = req.body.MembershipName;
    var CreatedBy = req.body.CreatedBy;
    
    var membership = new Membership({
        CompanyID : CompanyID,
        MembershipName : MembershipName,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    membership.save().then(function (Result) {
        res.json(globals.createResponse("HRMMembership Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMMembershipGet = function (req, res) {
    Membership.findAll().then(List => res.json(List))
};