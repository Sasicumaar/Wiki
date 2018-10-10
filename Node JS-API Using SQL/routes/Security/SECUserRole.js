var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var UserRole = app_model.UserRole;
var globals = connector.__globals;

exports.SECUserRoleInsert = function (req, res) {

    var RoleID = req.body.RoleID;
    var UserID = req.body.UserID;
    var CreatedBy = req.body.CreatedBy;
    
    var userole = new UserRole({
        RoleID : RoleID,
        UserID : UserID,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    userole.save().then(function (Result) {
        res.json(globals.createResponse("UserRole Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.SECUserRoleGet = function (req, res) {
    UserRole.findAll().then(List => res.json(List))
}; 
exports.GetSECUserRole = function (req, res) {
    var ID = req.params.ID;
    UserRole.findById(ID).then(function (List) {
        if (List != null) {
            res.json(globals.createResponse("UserRole Retrieved Successfully", List, 200));

        }
    }).catch(err => {
        res.json(globals.createEResponse(err.message, 500));
    });
}
exports.PutSECUserRole = function (req, res) {
    var RoleID = req.body.RoleID;
    var UserID = req.body.UserID;
    var UpdatedBy = req.bod.UpdatedBy;

    UserRole.update(
        {

            RoleID : RoleID,
            UserID : UserID,
            UpdatedBy: UpdatedBy
        }, { returning: true, where: { ID: req.params.ID } }


    ).then(function (data) {

        if (data != null) {
            // data = data.toObject({ selector: 1, transform: true, versionKey: false });
            res.json(globals.createResponse("UserRole updated successfully", data, 200));
        }
        else {
            res.json(globals.createEResponse("Invalid UserRole", 500));
        }
    })
}
exports.DeleteSECUserRole = function (req, res) {
    var ID = req.params.ID;
    UserRole.destroy({
        where: {
            ID: ID
        }
    }).then(function (result) {
        res.json(globals.createResponse("UserRole deleted successfully", result, 200));
    }).catch(function (e) {
        res.json(globals.createEResponse(e.message, 500));
    })
};