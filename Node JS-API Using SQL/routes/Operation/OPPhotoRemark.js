var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var PhotoRemark = app_model.PhotoRemark;
var sequelize = connector.sequelize;
var globals = connector.__globals;

exports.Insert = function (req, res) {
    var CompanyID = req.body.CompanyID;
    var Remarks = req.body.Remarks;
   
    var CreatedBy = req.body.CreatedBy;

    var oPPhotoRemark = new PhotoRemark({
        CompanyID:  CompanyID,
        Remarks : Remarks, 
        CreatedBy: CreatedBy
    });
    oPPhotoRemark.save().then(function (Result) {
        res.json(globals.createResponse("Insert Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.GETAll = function (req, res) { 
    sequelize.query('SELECT * FROM OPPhotoRemark',
        { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
    ).then(projects => {
        res.send(projects)
    });
}; 