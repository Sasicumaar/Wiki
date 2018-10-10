var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Role = app_model.Role;
var globals = connector.__globals;

exports.SECRoleInsert = function (req, res) {

    var RoleName = req.body.RoleName;
    var ModuleName = req.body.ModuleName;
    var Description = req.body.Description;
    var CreatedBy = req.body.CreatedBy;

    var role = new Role({
        RoleName: RoleName,
        ModuleName: ModuleName,
        Description: Description,
        CreatedBy: CreatedBy,
        //  CreatedDate: new Date()

    });
    role.save().then(function (Result) {
        res.json(globals.createResponse("Role Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.GETAll = function (req, res) {
    Role.findAll().then(List => res.json(List))
};
exports.GetSECRolebyID = function (req, res) {
    var ID = req.params.ID;
    Role.findById(ID).then(function (List) {
        if (List != null) {
            res.json(globals.createResponse("Role Retrieved Successfully", List, 200));

        }
    }).catch(err => {
        res.json(globals.createEResponse(err.message, 500));
    });
}
exports.PutSECRole = function (req, res) {
    var RoleName = req.body.RoleName;
    var ModuleName = req.body.ModuleName;
    var Description = req.body.Description;
    var UpdatedBy = req.body.UpdatedBy;

    Role.update(
        {

            RoleName: RoleName,
            ModuleName: ModuleName,
            Description: Description,
            UpdatedBy: UpdatedBy
        }, { returning: true, where: { ID: req.params.ID } }


    ).then(function (data) {

        if (data != null) {
            // data = data.toObject({ selector: 1, transform: true, versionKey: false });
            res.json(globals.createResponse("Role updated successfully", data, 200));
        }
        else {
            res.json(globals.createEResponse("Invalid Role", 500));
        }
    })
}
exports.DeleteSECRole = function (req, res) {
    var ID = req.params.ID;
    Role.destroy({
        where: {
            ID: ID
        }
    }).then(function (result) {
        res.json(globals.createResponse("Role deleted successfully", result, 200));
    }).catch(function (e) {
        res.json(globals.createEResponse(e.message, 500));
    })
};
