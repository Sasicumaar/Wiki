var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Company = app_model.Company;
var globals = connector.__globals;

exports.SECCompanyInsert = function (req, res) {
    var CompanyName = req.body.CompanyName;
    var CompanyCode = req.body.CompanyCode;
    var RegistrationNumber = req.body.RegistrationNumber;
    var Address = req.body.Address;
    var PostalCode = req.body.PostalCode;
    var Country = req.body.Country;
    var Email = req.body.Email;
    var Website = req.body.Website;
    var Fax = req.body.Fax;
    var TelePhone = req.body.TelePhone;
    var CurrencyValue = req.body.CurrencyValue;
    var Remarks = req.body.Remarks;

    var CreatedBy = req.body.CreatedBy;

    var company = new Company({
        CompanyName: CompanyName,
        CompanyCode: CompanyCode,
        RegistrationNumber: RegistrationNumber,
        Address: Address,
        PostalCode: PostalCode,
        Country: Country,
        Email: Email,
        Website: Website,
        Fax: Fax,
        TelePhone: TelePhone,
        CurrencyValue: CurrencyValue,
        Remarks: Remarks,
        CreatedBy: CreatedBy,
        // CreatedDate: new Date()
    });
    company.save().then(function (Result) {
        res.json(globals.createResponse("Company Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.SECCompanyGet = function (req, res) {
    Company.findAll().then(List => res.json(List))
};
exports.GetSECCompany = function (req, res) {
    var ID = req.params.ID;
    Company.findById(ID).then(function (List) {
        if (List != null) {
            res.json(globals.createResponse("Company Retrieved Successfully", List, 200));

        }
    }).catch(err => {
        res.json(globals.createEResponse(err.message, 500));
    });
}
exports.PutSECCompany = function (req, res) {
    var ID = req.body.ID;
    var CompanyName = req.body.CompanyName;
    //var CompanyCode = req.body.CompanyCode;
    var RegistrationNumber = req.body.RegistrationNumber;
    var Address = req.body.Address;
    var PostalCode = req.body.PostalCode;
    var Country = req.body.Country;
    var Email = req.body.Email;
    var Website = req.body.Website;
    var Fax = req.body.Fax;
    var TelePhone = req.body.TelePhone;
    var CurrencyValue = req.body.CurrencyValue;
    var Remarks = req.body.Remarks;
    var UpdatedBy = req.body.UpdatedBy;

    var Update = Company.update(
        {

                CompanyName: CompanyName,
                RegistrationNumber: RegistrationNumber,
                Address: Address,
                PostalCode: PostalCode,
                Country: Country,
                Email: Email,
                Website: Website,
                Fax: Fax,
                TelePhone: TelePhone,
                CurrencyValue: CurrencyValue,
                Remarks: Remarks,
                UpdatedBy: UpdatedBy
            },{returning: true, where:{ID: req.params.ID}}
 
        
        ).then(function (data) {

        if (data != null) {
            // data = data.toObject({ selector: 1, transform: true, versionKey: false });
            res.json(globals.createResponse("Company updated successfully", data, 200));
        }
        else {
            res.json(globals.createEResponse("Invalid Company", 500));
        }
    })
}
exports.DeleteSECCompany=function(req,res){
    var ID=req.params.ID;
    Company.destroy({
        where: {
            ID: ID
        }
}).then(function (result) {
    res.json(globals.createResponse("Company deleted successfully", result, 200));
}).catch(function (e) {
    res.json(globals.createEResponse(e.message, 500));
})
};
