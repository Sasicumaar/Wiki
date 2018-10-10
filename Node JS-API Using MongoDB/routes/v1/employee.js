var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var app_model = connector.app_model;
var Emp = app_model.Employee;
var Moment = globals.Moment;
var uniqid = require('uniqid');
var ObjectId = require('mongoose').Types.ObjectId;

exports.addNewEmployee = function (req, res) {
    req.sanitizeBody("EmployeeID").trim();
    req.sanitizeBody("EmployeeName").trim();
    req.sanitizeBody("Gender").trim();
    req.sanitizeBody("Nationality").trim();
    req.sanitizeBody("CompanyID").trim();
    req.sanitizeBody("DateofBirth").trim();
    req.sanitizeBody("Country").trim();
    req.sanitizeBody("Email").trim();
    req.sanitizeBody("Createdby").trim();

    req.getValidationResult().then(function (result) {
        if (result.isEmpty()) {
            var EmployeeID = req.body.EmployeeID;
            var EmployeeName = req.body.EmployeeName;
            var Gender = req.body.Gender;
            var Nationality = req.body.Nationality;
            var CompanyID = req.body.CompanyID;
            var DateofBirth = req.body.DateofBirth;
            var Country = req.body.Country;
            var Email = req.body.Email;
            var Createdby = req.body.Createdby;


            Emp.findOne({
                EmployeeID: EmployeeID
            }, {}).then(function (List) {
                if (List != null && List != '' && List != undefined) {
                    res.json(globals.createEResponse("Existing EmployeeID", 422));
                } else {

                    var emp = new Emp({
                        EmployeeID: EmployeeID,
                        Salutation: Salutation,
                        EmployeeName: EmployeeName,
                        Gender: Gender,
                        CompanyID: ObjectId(CompanyID),
                        Nationality: Nationality,
                        DateofBirth: DateofBirth,
                        Country: Country,
                        Email: Email,
                        Createdby: Createdby,
                        CreatedDate:globals.Moment.utc()
                    });
                    emp.save(function (err, employee) {
                        if (err) {
                            console.log(err);
                            res.json(globals.createEResponse(err.message, 500));
                        } else {
                            employee = employee.toObject({
                                selector: 1,
                                transform: true,
                                versionKey: false
                            });
                            res.json(globals.createResponse("Employee Added Successfully", employee, 200));
                        }
                    });
                }

            })
        } else {
            res.json(globals.createEResponse(result.array()[0].msg, 422));
        }

    });

};

exports.modifyEmployee = function (req, res) {
   
    req.sanitizeBody("EmployeeID").trim();
    req.sanitizeBody("EmployeeName").trim();
    req.sanitizeBody("Gender").trim();
    req.sanitizeBody("Nationality").trim();
    req.sanitizeBody("CompanyID").trim();
    req.sanitizeBody("DateofBirth").trim();
    req.sanitizeBody("Country").trim();
    req.sanitizeBody("Email").trim();
    req.sanitizeBody("Createdby").trim();
    req.sanitizeBody("UpdatedBy").trim(); 
 
    req.getValidationResult().then(function (validation_result) {
        if (validation_result.isEmpty()) {
            var e_id = req.body._id;
            var EmployeeID = req.body.EmployeeID; 
            var EmployeeName = req.body.EmployeeName;
            var Gender = req.body.Gender;
            var Nationality = req.body.Nationality;
            var CompanyID = req.body.CompanyID;
            var DateofBirth = req.body.DateofBirth;
            var Country = req.body.Country;
            var Email = req.body.Email; 

            var UpdatedBy = req.body.UpdatedBy; 
            var updateEmployee = Emp.findOneAndUpdate({
                _id: e_id,
                IsActive: true
            }, {
                $set: {
                    
                    EmployeeID: EmployeeID,
                    Salutation: Salutation,
                    EmployeeName: EmployeeName,
                    Gender: Gender,
                    CompanyID: ObjectId(CompanyID),
                    Nationality: Nationality,
                    DateofBirth: DateofBirth,
                    Country: Country,
                    Email: Email,
                    Createdby: Createdby, 
                    UpdatedDate: globals.Moment.utc()
                }
            }, {
                new: true
            }).exec();
            updateEmployee.then(function (data) {
                if (data != null) {
                    data = data.toObject({
                        selector: 1,
                        transform: true,
                        versionKey: false
                    });
                    res.json(globals.createResponse("Employee updated successfully", data, 200));
                } else {
                    res.json(globals.createEResponse("Invalid Employee", 500));
                }
            })
        } else {
            res.json(globals.createEResponse(result.array()[0].msg, 422));
        }
    }).catch(function (e) {
        res.json(globals.createEResponse(e.message, 500));
    });

};

exports.getAllEmployee = function (req, res) {
    
    var data = {
        
    };
    var opts = {
        selector: 1
    };
    Emp.getAll(data, opts, function (err, results) {
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
            }, function (err, employeeList) {
                res.json(globals.createResponse("Employee List Retrieved Successfully", employeeList, 200));
            });
        }
    });

};