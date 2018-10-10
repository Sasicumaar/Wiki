var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var AuthSecret = require(path.join(__appbase, "config", "defaults", "db.json")).AuthSecret.secret;
var app_model = connector.app_model;
var globals = connector.__globals;
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken') 
var User = app_model.User; 

exports.Login = function (req, res) {
    var LoginID = req.body.LoginID;
    var Password = req.body.Password;
    User.count().then(function (UserCount) {
        if (UserCount == 0) {
            var hashedPassword = bcrypt.hashSync(Password, 8);
            var user = new User({
                UserName: LoginID,
                LoginID: LoginID,
                Email: "",
                MobileNumber: "",
                Password: hashedPassword,
                ExpiryDate: null,
                IsLocked: false,
                LastSuccess: null,
                LastFailure: null,
                EmployeeID: "",
                CompanyID: "",
                AllowExport: true,
                Pages_Visible: "Users,Company,Workflow,HRM Admin,HRM Core,Settings,Customers,Leads,Work Orders,Contracts,Job Settings,Teams,Scheduler",
                Pages_Read: "Users,Company,Workflow,HRM Admin,HRM Core,Settings,Customers,Leads,Work Orders,Contracts,Job Settings,Teams,Scheduler",
                Pages_Write: "Users,Company,Workflow,HRM Admin,HRM Core,Settings,Customers,Leads,Work Orders,Contracts,Job Settings,Teams,Scheduler",
                Roles: "",
                MobileAccess: "Pest Control",
                IPAddress: "",
                CreatedBy: "System"
            });
            user.save().then(function (Result) {
                 // create a token
                 var Token = jwt.sign({ id: Result.ID }, AuthSecret, {
                    expiresIn: 86400 // expires in 24 hours
                }); 
                var Items =  {
                    ID : Result.ID,
                    UserName : Result.UserName,
                    LoginID : Result.LoginID,   
                    EmployeeID : Result.EmployeeID,
                    CompanyID : Result.CompanyID, 
                    Pages_Visible : Result.Pages_Visible,
                    Pages_Read : Result.Pages_Read,
                    Pages_Write : Result.Pages_Write, 
                    MobileAccess : Result.MobileAccess,
                    IPAddress : Result.IPAddress,
                    Token : Token
                };
                res.json(globals.createResponse("Logged in successfully", Items, 200));
            })
            .catch(err => { 
                res.json(globals.createEResponse(err, 500));
            });
        }
        else {
            User.findOne({ LoginID: LoginID }).then(function (Result) {
                if (!Result) res.json(globals.createEResponse("UserID Not Found", 500));

                var passwordIsValid = bcrypt.compareSync(Password, Result.Password);
                if (!passwordIsValid)
                    res.json(globals.createEResponse("Password Not Matched", 500));

                else if (Result.IsLocked == true)
                    res.json(globals.createEResponse("Locked", 500));

                // create a token
                var Token = jwt.sign({ id: Result.ID }, AuthSecret, {
                    expiresIn: 86400 // expires in 24 hours
                }); 
                var Items =  {
                    ID : Result.ID,
                    UserName : Result.UserName,
                    LoginID : Result.LoginID,   
                    EmployeeID : Result.EmployeeID,
                    CompanyID : Result.CompanyID, 
                    Pages_Visible : Result.Pages_Visible,
                    Pages_Read : Result.Pages_Read,
                    Pages_Write : Result.Pages_Write, 
                    MobileAccess : Result.MobileAccess,
                    IPAddress : Result.IPAddress,
                    Token : Token
                };
                res.json(globals.createResponse("Logged in successfully", Items, 200));
            })
                .catch(err => {
                    res.json(globals.createEResponse(err.message, 500));
                });
        }
    })
};
exports.Logout = function (req, res) {

}; 