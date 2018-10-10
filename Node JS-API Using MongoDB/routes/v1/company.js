var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var app_model = connector.app_model;

var Company = app_model.Company;

exports.addNewCompany = function (req, res) {
    req.sanitizeBody("CompanyName").trim();
    req.sanitizeBody("CompanyCode").trim();
    req.sanitizeBody("Email").trim();
    req.sanitizeBody("Address").trim();
    req.sanitizeBody("Address1").trim();
    req.sanitizeBody("Country").trim();
    req.sanitizeBody("Currency").trim();
    req.sanitizeBody("Fax").trim();
    req.sanitizeBody("Telephone").trim();
    req.sanitizeBody("RegisterNumber").trim();
    req.sanitizeBody("Website").trim();
    req.sanitizeBody("Remarks").trim();
    req.sanitizeBody("Createdby").trim();
    req.sanitizeBody("UpdatedBy").trim();
    req.getValidationResult().then(function (result) {
        if (result.isEmpty()) {
            var CompanyName = req.body.CompanyName;
            var CompanyCode = req.body.CompanyCode;
            var Email = req.body.Email;
            var Address = req.body.Address;
            var Address1 = req.body.Address; 
            var Country = req.body.Country;
            var Currency = req.body.Currency;
            var Fax = req.body.Fax;
            var Telephone = req.body.Telephone;
            var RegisterNumber = req.body.RegisterNumber;
            var Website = req.body.Website;
            var Remarks = req.body.Remarks;
            var Createdby = req.body.Createdby;
            var UpdatedBy = req.body.UpdatedBy; 

            Company.checkByEmail({
                Email: Email,
                status: true
            }, {
                selector: 2
            }, function (err, data) {
                if (err) {
                    res.json(globals.createEResponse(err.message, 422));
                } else if (data != null) {
                    res.json(globals.createEResponse("There is an existing company registered with the Email", 422));
                } else {
                    var company = new Company({
                        CompanyName: CompanyName,
                        CompanyCode: CompanyCode, 
                        Email: Email,
                        Address: Address, 
                        Address1: Address1, 
                        Country: Country,
                        Currency: Currency,
                        Fax: Fax,
                        Telephone: Telephone,
                        RegisterNumber: RegisterNumber,
                        Website: Website,
                        Remarks: Remarks,
                        Createdby: Createdby 
                    });
                    company.save(function (err, company) {
                        if (err) {
                            console.log(err);
                            res.json(globals.createEResponse(err.message, 500));
                        } else {
                            company = company.toObject({
                                selector: 1,
                                transform: true,
                                versionKey: false
                            });
                            res.json(globals.createResponse("Company Created Successfully", company, 200));
                        }
                    });
                }
            });
        } else {
            res.json(globals.createEResponse(result.array()[0].msg, 422));
        }
    });
};
exports.modifyCompany = function (req, res) {
    req.sanitizeBody("_id").trim();
    req.sanitizeBody("CompanyName").trim();
    req.sanitizeBody("CompanyCode").trim();
    req.sanitizeBody("Email").trim();
    req.sanitizeBody("Address").trim();
    req.sanitizeBody("Address1").trim();
    req.sanitizeBody("Country").trim();
    req.sanitizeBody("Fax").trim();
    req.sanitizeBody("Telephone").trim();
    req.sanitizeBody("RegisterNumber").trim();
    req.sanitizeBody("Website").trim();
    req.sanitizeBody("Remarks").trim(); 
    req.sanitizeBody("UpdatedBy").trim(); 

    req.checkBody(company_validator.company_validate_schema);
    req.getValidationResult().then(function (validation_result) {
        if (validation_result.isEmpty()) {
            var c_id = req.body._id;
            var CompanyName = req.body.CompanyName;
            var CompanyCode = req.body.CompanyCode;
            var Email = req.body.Email;
            var Address = req.body.Address;
            var Address1 = req.body.Address1;
            var Country = req.body.Country;
            var Fax = req.body.Fax;
            var Telephone = req.body.Telephone;
            var RegisterNumber = req.body.RegisterNumber;
            var Website = req.body.Website;
            var Remarks = req.body.Remarks;

            var UpdatedBy = req.body.UpdatedBy; 

            var updateCompany = Company.findOneAndUpdate({
                _id: c_id,
                status: true
            }, {
                $set: {
                    CompanyName: CompanyName,
                    CompanyCode: CompanyCode,
                    Email: Email,
                    Address: Address,
                    Address1: Address1,
                    Country: Country,
                    Fax: Fax,
                    Telephone: Telephone,
                    RegisterNumber: RegisterNumber,
                    Website: Website,
                    Remarks: Remarks,
                    UpdatedBy: UpdatedBy,
                    UpdatedDate: globals.Moment.utc()
                }
            }, {
                new: true
            }).exec();
            updateCompany.then(function (data) {
                if (data != null) {
                    data = data.toObject({
                        selector: 1,
                        transform: true,
                        versionKey: false
                    });
                    res.json(globals.createResponse("Company updated successfully", data, 200));
                } else {
                    res.json(globals.createEResponse("Invalid Company", 500));
                }
            })
        } else {
            res.json(globals.createEResponse(result.array()[0].msg, 422));
        }
    }).catch(function (e) {
        res.json(globals.createEResponse(e.message, 500));
    });

};
exports.getAllCompany = function (req, res) {
    var data = {
        status: true
    };
    var opts = {
        selector: 1
    };
    Company.getAll(data, opts, function (err, results) {
        if (err) {
            console.log(err);
            res.json(globals.createEResponse(err.message, 500));
        } else {
            globals.Async.map(results, function (item, itemCallBack) {
                var itemObj = null,
                    err = null;
                try {
                    itemObj = item.toObject({
                        selector: 1,
                        transform: true,
                        versionKey: false
                    });
                } catch (e) {
                    err = e;
                }
                itemCallBack(err, itemObj);
            }, function (err, companyList) {
                res.json(globals.createResponse("Company List Retrieved Successfully", companyList, 200));
            });
        }
    });
};
