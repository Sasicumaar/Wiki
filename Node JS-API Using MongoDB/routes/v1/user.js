var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var app_model = connector.app_model; 
var _jade = require('jade');
var fs = require('fs');
var User = app_model.User;
var Moment = globals.Moment;
var app = require('express');
var nodemailer = require('nodemailer');
var EmailTemplate = require('email-templates').EmailTemplate;
var replace = require("replace");

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
exports.addNewUser = function (req, res) { 
    req.sanitizeBody("UserName").trim();
    req.sanitizeBody("UserID").trim();
    req.sanitizeBody("Email").trim();
    req.sanitizeBody("Designation").trim();
    req.sanitizeBody("Roles").trim();
    req.sanitizeBody("Password").trim();
    req.sanitizeBody("ExpiryDate").trim();
    req.sanitizeBody("IsLocked").trim();
    req.sanitizeBody("IsActive").trim();
    req.sanitizeBody("LastSuccess").trim();
    req.sanitizeBody("LastFailure").trim();
    req.sanitizeBody("EmployeeID").trim();
    req.sanitizeBody("ClientID").trim();
    req.sanitizeBody("ClientName").trim();
    req.sanitizeBody("MobileNumber").trim();
    req.sanitizeBody("CreatedBy").trim();
    req.sanitizeBody("UpdatedBy").trim();

    req.sanitizeBody("Customer_Id").trim();
    req.sanitizeBody("CustomerName").trim();
 
    req.getValidationResult().then(function (result) {
        if (result.isEmpty()) {
            var UserName = req.body.UserName;
            var UserID = req.body.UserID;
            var Email = req.body.Email;
            var Designation = req.body.Designation;
            var Roles = req.body.Roles;
            var Password = encrypt(req.body.Password);
            var ExpiryDate = req.body.ExpiryDate;
            var IsLocked = req.body.IsLocked;
            var IsActive = req.body.IsActive;
            var LastSuccess = req.body.LastSuccess;
            var LastFailure = req.body.LastFailure;
            var MobileNumber = req.body.MobileNumber;
            var EmployeeID = req.body.EmployeeID;
            var ClientID = req.body.ClientID;
            var ClientName = req.body.ClientName;
            var CreatedBy = req.body.CreatedBy;
            var UpdatedBy = req.body.UpdatedBy;
            var Customer_Id = req.body.Customer_Id;
            var CustomerName = req.body.CustomerName;
            var u_expiry = Moment.utc(ExpiryDate, globals.DATE_FORMAT_1, true);
            var errMsg = "";
            if (!u_expiry.isValid()) {
                errMsg = "Invalid Passport Expiry Date";
            }
            
            User.checkByEmail({ UserID: UserID, IsActive: IsActive }, { selector: 2 }, function (err, data) {
                if (err) {
                    res.json(globals.createEResponse(err.message, 422));
                } else if (data != null) {
                    res.json(globals.createEResponse("Existing UserID", 422));
                } else {
                    var user = new User({
                        UserName: UserName,
                        UserID: UserID,
                        Email: Email,
                        Designation: Designation,
                        Roles: Roles,
                        Password: Password,
                        ExpiryDate: ExpiryDate,
                        IsLocked: IsLocked,
                        LastSuccess: LastSuccess,
                        LastFailure: LastFailure,
                        MobileNumber: MobileNumber,
                        EmployeeID: EmployeeID,
                        ClientID: ClientID,
                        ClientName: ClientName,
                        CreatedBy: CreatedBy,
                        IsActive: IsActive,
                        UpdatedBy: UpdatedBy,
                        Customer_Id: Customer_Id,
                        CustomerName: CustomerName,
                        CreatedDate: globals.Moment.utc()

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
            });
        } else {
            res.json(globals.createEResponse(result.array()[0].msg, 422));
        }
    });
};
exports.modifyUser = function (req, res) {
    req.sanitizeBody("_id").trim();
    req.sanitizeBody("UserName").trim();
    req.sanitizeBody("UserID").trim();
    req.sanitizeBody("Email").trim();
    req.sanitizeBody("Designation").trim();
    req.sanitizeBody("Roles").trim();
    req.sanitizeBody("Password").trim();
    req.sanitizeBody("ExpiryDate").trim();
    req.sanitizeBody("IsLocked").trim();
    req.sanitizeBody("IsActive").trim();
    req.sanitizeBody("LastSuccess").trim();
    req.sanitizeBody("LastFailure").trim();
    req.sanitizeBody("EmployeeID").trim();
    req.sanitizeBody("ClientID").trim();
    req.sanitizeBody("ClientName").trim();
    req.sanitizeBody("MobileNumber").trim();
    req.sanitizeBody("UpdatedBy").trim();
    req.sanitizeBody("UpdatedDate").trim();
    req.sanitizeBody("Customer_Id").trim();
    req.sanitizeBody("CustomerName").trim();
    req.checkBody(user_validator.user_validate_schema);
    req.getValidationResult().then(function (validation_result) {
        if (validation_result.isEmpty()) {
            var u_id = req.body._id;
            var UserName = req.body.UserName;
            var UserID = req.body.UserID;
            var Email = req.body.Email;
            var Designation = req.body.Designation;
            var Roles = req.body.Roles;
            var Password = encrypt(req.body.Password);
            var ExpiryDate = req.body.ExpiryDate;
            var IsLocked = req.body.IsLocked;
            var IsActive = req.body.IsActive;
            var LastSuccess = req.body.LastSuccess;
            var LastFailure = req.body.LastFailure;
            var MobileNumber = req.body.MobileNumber;
            var EmployeeID = req.body.EmployeeID;
            var ClientID = req.body.ClientID;
            var ClientName = req.body.ClientName;
            var UpdatedBy = req.body.UpdatedBy;
            var UpdatedDate = req.body.UpdatedDate;
            var Customer_Id = req.body.Customer_Id;
            var CustomerName = req.body.CustomerName;

            var updateUser = User.findOneAndUpdate({ _id: u_id },

                {
                    $set: {
                        UserName: UserName, UserID: UserID,
                        Email: Email, Designation: Designation,
                        Roles: Roles, Password: Password, ExpiryDate: ExpiryDate, IsLocked: IsLocked,
                        LastSuccess: LastSuccess, LastFailure: LastFailure, MobileNumber: MobileNumber,
                        EmployeeID: EmployeeID, ClientID: ClientID, ClientName: ClientName,
                        Customer_Id: Customer_Id,
                        CustomerName: CustomerName,
                        UpdatedBy: UpdatedBy, IsActive: IsActive,
                        UpdatedDate: globals.Moment.utc()
                    }
                },
                { new: true }).exec();
            updateUser.then(function (data) {
                if (data != null) {
                    data = data.toObject({ selector: 1, transform: true, versionKey: false });
                    res.json(globals.createResponse("User updated successfully", data, 200));
                }
                else {
                    res.json(globals.createEResponse("Invalid User", 500));
                }
            })
        }
        else {
            res.json(globals.createEResponse(result.array()[0].msg, 422));
        }
    }).catch(function (e) {
        res.json(globals.createEResponse(e.message, 500));
    });

};
exports.getAllUser = function (req, res) {

    var data = { IsActive: true };

    var opts = { selector: 1 };
    User.getAll(data, opts, function (err, results) {
        if (err) {
            console.log(err);
            res.json(globals.createEResponse(err.message, 500));
        } else {
            globals.Async.map(results, function (item, itemCallBack) {
                var itemObj = null, err = null;
                try {
                    itemObj = item.toObject({ selector: 1, transform: true, versionKey: false });
                } catch (e) {
                    err = e;
                }
                itemCallBack(err, itemObj);

            }, function (err, userList) {
                userList.forEach(function (userList) {
                    userList.Password = decrypt(userList.Password);
                })
                res.json(globals.createResponse("User List Retrieved Successfully", userList, 200));
            });
        }
    });
};


var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: globals.EmailUserName,
        pass: globals.EmailPassword
    }
});

exports.sendEmail = function (req, res) { 
    req.sanitizeBody("SenderEmailAddress").trim();
    req.sanitizeBody("UserName").trim();
    req.sanitizeBody("UserID").trim();
    req.sanitizeBody("Password").trim();

    var TO_ADDRESS = req.body.SenderEmailAddress;
    var UserName = req.body.UserName;
    var Password = req.body.Password;
    var LoginID = req.body.UserID;


    var sendMail = function (toAddress, subject, content, next) {
        var mailOptions = {
            to: TO_ADDRESS,
            subject: "User Access Details",
            html: content
        };

        smtpTransport.sendMail(mailOptions, next);
    };

    var template = process.cwd() + '/views/email.jade';
    fs.readFile(template, 'utf8', function (err, file) {
        if (err) {

            console.log('ERROR1!');
            res.json(globals.createEResponse("Email Sent", 500));

        }
        else {
            var file = file.replace(/{UserName}/g, UserName);
            var file = file.replace(/{Password}/g, Password);

            var file = file.replace(/{UserID}/g, LoginID);

            var compiledTmpl = _jade.compile(file, { filename: template });
            var context = { title: 'Express' };
            var html = compiledTmpl(context);
            sendMail(TO_ADDRESS, 'test', html, function (err, response) {
                if (err) {
                    console.log('ERROR3!');
                    res.json(globals.createEResponse("Email Sent", 500));
                }
                res.json(globals.createEResponse("Email Sent", 200));
                console.log('Email sent!');
            });
        }
    });
};
exports.deleteUser = function (req, res) {
    req.sanitizeBody("_id").trim();
    var U_id = req.body._id;
    var deleteAction = User.find({ _id: U_id }).remove().exec();
    deleteAction.then(function (result) {
        res.json(globals.createResponse("User deleted successfully", result, 200));
    }).catch(function (e) {
        res.json(globals.createEResponse(e.message, 500));
    });
};

exports.getAllByClientId = function (req, res) {
  req.sanitizeBody("Client_Id").trim();
    var Client_Id = req.body.Client_Id;
    var data = { ClientID: Client_Id};
    var opts = { selector: 1 };
    User.getAllClientId(data, opts, function (err, results) {
        if (err) {
            console.log(err);
            res.json(globals.createEResponse(err.message, 500));
        } else {
            globals.Async.map(results, function (item, itemCallBack) {
                var itemObj = null, err = null;
                try {
                    itemObj = item.toObject({ selector: 1, transform: true, versionKey: false });
                } catch (e) {
                    err = e;
                }
                itemCallBack(err, itemObj);

            }, function (err, userList) {
                userList.forEach(function (userList) {
                    userList.Password = decrypt(userList.Password);
                })
                res.json(globals.createResponse("User List Retrieved Successfully", userList, 200));
            });
        }
    });
};