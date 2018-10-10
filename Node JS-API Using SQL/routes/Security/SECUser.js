var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var User = app_model.User
var globals = connector.__globals;
var bcrypt = require('bcryptjs');

exports.SECUserInsert = function (req, res) {

    var UserName = req.body.UserName;
    var LoginID = req.body.LoginID;
    var Email = req.bodyEmail;
    var MobileNumber = req.body.MobileNumber;
    var Password = req.body.Password;
    var ExpiryDate = req.body.ExpiryDate; 
    var IsLocked = req.body.IsLocked;
    var LastSuccess = req.body.LastSuccess;
    var LastFailure = req.body.LastFailure;
    var EmployeeID = req.body.EmployeeID;
    var CompanyID = req.body.CompanyID;
    var AllowExport = req.body.AllowExport;
    var Pages_Visible = req.body.Pages_Visible;
    var Pages_Read = req.body.Pages_Read;
    var Pages_Write = req.body.Pages_Write;
    var Roles = req.body.Roles;
    var MobileAccess = req.body.MobileAccess;
    var IPAddress = req.body.IPAddress;
    var CreatedBy = req.body.CreatedBy;
    
    var hashedPassword = bcrypt.hashSync(Password, 8);
    var user = new User({
        UserName : UserName,
        LoginID : LoginID,
        Email : Email,
        MobileNumber : MobileNumber,
        Password : hashedPassword,
        ExpiryDate : ExpiryDate,
        IsLocked : IsLocked,
        LastSuccess : LastSuccess,
        LastFailure : LastFailure,
        EmployeeID : EmployeeID,
        CompanyID : CompanyID,
        AllowExport : AllowExport,
        Pages_Visible : Pages_Visible,
        Pages_Read : Pages_Read,
        Pages_Write : Pages_Write,
        Roles : Roles,
        MobileAccess : MobileAccess,
        IPAddress : IPAddress,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    user.save().then(function (Result) {
        res.json(globals.createResponse("User Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.SECUserGet = function (req, res) {
    User.findAll().then(List => res.json(List))
}; 

exports.GetSECUser = function (req, res) {
    var ID = req.params.ID;
    User.findById(ID).then(function (List) {
        if (List != null) {
            res.json(globals.createResponse("User Retrieved Successfully", List, 200));

        }
    }).catch(err => {
        res.json(globals.createEResponse(err.message, 500));
    });
}
exports.PutSECUser = function (req, res) {
    var UserName = req.body.UserName;
    var LoginID = req.body.LoginID;
    var Email = req.bodyEmail;
    var MobileNumber = req.body.MobileNumber;
    var Password = req.body.Password;
    var ExpiryDate = req.body.ExpiryDate; 
    var IsLocked = req.body.IsLocked;
    var LastSuccess = req.body.LastSuccess;
    var LastFailure = req.body.LastFailure;
    var EmployeeID = req.body.EmployeeID;
    var CompanyID = req.body.CompanyID;
    var AllowExport = req.body.AllowExport;
    var Pages_Visible = req.body.Pages_Visible;
    var Pages_Read = req.body.Pages_Read;
    var Pages_Write = req.body.Pages_Write;
    var Roles = req.body.Roles;
    var MobileAccess = req.body.MobileAccess;
    var IPAddress = req.body.IPAddress;
    var UpdatedBy = req.bod.UpdatedBy;
    
    var hashedPassword = bcrypt.hashSync(Password, 8);

    User.update(
        {

            UserName : UserName,
            LoginID : LoginID,
            Email : Email,
            MobileNumber : MobileNumber,
            Password : hashedPassword,
            ExpiryDate : ExpiryDate,
            IsLocked : IsLocked,
            LastSuccess : LastSuccess,
            LastFailure : LastFailure,
            EmployeeID : EmployeeID,
            CompanyID : CompanyID,
            AllowExport : AllowExport,
            Pages_Visible : Pages_Visible,
            Pages_Read : Pages_Read,
            Pages_Write : Pages_Write,
            Roles : Roles,
            MobileAccess : MobileAccess,
            IPAddress : IPAddress,
            UpdatedBy: UpdatedBy
        }, { returning: true, where: { ID: req.params.ID } }


    ).then(function (data) {

        if (data != null) {
            // data = data.toObject({ selector: 1, transform: true, versionKey: false });
            res.json(globals.createResponse("User updated successfully", data, 200));
        }
        else {
            res.json(globals.createEResponse("Invalid User", 500));
        }
    })
}
exports.DeleteSECUser = function (req, res) {
    var ID = req.params.ID;
    User.destroy({
        where: {
            ID: ID
        }
    }).then(function (result) {
        res.json(globals.createResponse("User deleted successfully", result, 200));
    }).catch(function (e) {
        res.json(globals.createEResponse(e.message, 500));
    })
};
