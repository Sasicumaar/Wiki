var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));

var globals = connector.__globals;
var app_model = connector.app_model;
var User = app_model.User;
var Userrole = app_model.Userrole;
var Pagedb = app_model.Pagedb;
var Usersessions = app_model.Usersessions;
var Moment = globals.Moment;
var navigator = require("navigator"); 
 
var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var password = 'MAKV2SPBNI99212';

function encrypt(text) {
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text) {
    var decipher = crypto.createDecipher(algorithm, password)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}
exports.userchangePassword = function (req, res) {

    req.sanitizeBody("UserID").trim();
    req.sanitizeBody("CNewPassword").trim();
    req.sanitizeBody("oPassword").trim();

    var user_id = req.body.UserID;
    var npass = encrypt(req.body.CNewPassword);
    var opass = req.body.oPassword
    User.findOne({ UserID: user_id, IsActive: true }, function (err, document) {
        if (err) {
            console.log('Error data not found');
        }
        else {
            if (opass == decrypt(document.Password)) {
                var updateUser = User.findOneAndUpdate({ UserID: user_id, IsActive: true },
                    {
                        $set: {
                            Password: npass,
                            UpdatedDate: globals.Moment.utc()
                        }
                    },
                    { new: true }).exec();
                updateUser.then(function (data) {
                    if (data != null) {
                        data = data.toObject({ selector: 1, transform: true, versionKey: false });
                        res.json(globals.createResponse("Password updated successfully", data, 200));
                    }
                    else {
                        res.json(globals.createEResponse("Invalid Password", 500));
                    }
                })
            }
            else {
                res.json(globals.createEResponse("Invalid Old Password", 500));

            }
        }
    }); 
};

exports.userResetPassword = function (req, res) {
    req.sanitizeBody("UserID").trim();
    req.sanitizeBody("rNewPassword").trim();
    var user_id = req.body.UserID;
    var rpass = encrypt(req.body.rNewPassword);

    User.findOne({ UserID: user_id, IsActive: true }, function (err, document) {
        if (err) {
            console.log('Error data not found');
        }
        else {
            if (document != null) {

                var updateUser = User.findOneAndUpdate({ UserID: user_id, IsActive: true },
                    {
                        $set: {
                            Password: rpass,
                            UpdatedDate: globals.Moment.utc()
                        }
                    },
                    { new: true }).exec();
                updateUser.then(function (data) {
                    if (data != null) {
                        data = data.toObject({ selector: 1, transform: true, versionKey: false });
                        res.json(globals.createResponse("Password Reseted successfully", data, 200));
                    }
                    else {
                        res.json(globals.createEResponse("Invalid Reset Password", 500));
                    }
                })
            }
            else {
                res.json(globals.createEResponse("Invalid UserID", 500));

            }
        }
    });
};
exports.loginuser = function (req, res) {

    req.sanitizeBody("UserID").trim();
    req.sanitizeBody("Password").trim(); 
    var user_id = req.body.UserID;
    var pass = req.body.Password;
    User.count(function (err, count) {
        if (!err && count === 0) {
            console.log(count);
            req.sanitizeBody("UserID").trim();
            req.sanitizeBody("Password").trim();
            var UserName = req.body.UserID;
            var UserID = req.body.UserID;
            var Roles = req.body.Roles;
            var Password = encrypt(req.body.Password);

            var user = new User({
                UserName: UserName,
                UserID: UserID,
                Email: null,
                Designation: null,
                Roles: Roles,
                Password: Password,
                ExpiryDate: "2025-05-31 04:42:06.965Z",
                IsActive: true,
                IsLocked: false,
                LastSuccess: null,
                LastFailure: null,
                MobileNumber: null,
                EmployeeID: null,
                CompanyID: null, 
                CreatedBy: UserName,
                UpdatedBy: null
            });
            user.save(function (err, user) {
                if (err) {
                    console.log(err);
                    res.json(globals.createEResponse(err.message, 500));
                } else {
                    user = user.toObject({ selector: 1, transform: true, versionKey: false });
                    res.json(globals.createResponse("User Created Successfully", user, 200));
                    
                }
            });
        }
        else {
            User.findOne({ 'UserID': user_id }).collation({ locale: 'en', strength: 1 })
                .then(function (result) {

                    if (null == result) {
                        res.json(globals.createEResponse("UserID Not Found", 500));
                    }
                    else {
                        var u_pass = decrypt(result.Password);
                        var cdate = Moment.utc(cdate, globals.TIME_FORMAT_1, true);
                        console.log("FOUND USER: " + result.UserID);
                        if (u_pass === pass) {
                            if (result.IsLocked === false && result.IsActive === true && result.ExpiryDate > cdate) {
                                console.log("AUTHENTICATION SUCCES");
                                result = result.toObject({ selector: 1, transform: true, versionKey: false });

                                res.json(globals.createResponse("Login successfull", result, 200));

                                sessionpost(user_id, ip);
                            }
                            else {
                                if (result.IsLocked === true) {
                                    res.json(globals.createEResponse("Locked", 500));
                                }
                                else if (result.IsActive === false) {
                                    res.json(globals.createEResponse("NotActive", 500));
                                }
                                else if (result.ExpiryDate < cdate) {
                                    res.json(globals.createEResponse("Expired", 500));
                                }
                            }
                        }
                        else {
                            res.json(globals.createEResponse("Password Not Matched", 500));
                        }

                    }

                });
        }
    });

};
 

  
 