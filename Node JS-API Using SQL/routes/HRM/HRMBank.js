var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Bank = app_model.Bank;
var globals = connector.__globals;

exports.HRMBankInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var BankName = req.body.BankName;
    var BankCode = req.body.BankCode;
    var BIC = req.body.BIC;
    var CreatedBy = req.body.CreatedBy;
    
    var bank = new Bank({
        CompanyID : CompanyID,
        BankName : BankName,
        BankCode : BankCode,
        BIC : BIC,
        CreatedBy: CreatedBy,
        // CreatedDate: new Date()

    });
    bank.save().then(function (Result) {
        res.json(globals.createResponse("HRMBank Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMBankUpdate = function (req, res) {

    var c_id = req.body.ID;
    var BankName = req.body.BankName;
    var BankCode = req.body.BankCode;
    var BIC = req.body.BIC;
    var UpdatedBy = req.body.UpdatedBy;

        Bank.update({
            BankName: BankName,
            BankCode: BankCode,
            BIC: BIC,
            UpdatedBy: UpdatedBy,
            UpdatedDate: globals.Moment.utc()
        },
        { where: {ID: c_id} }).then(List => res.json(List))
};
exports.HRMBankGet = function (req, res) {
    Bank.findAll().then(List => res.json(List))

};