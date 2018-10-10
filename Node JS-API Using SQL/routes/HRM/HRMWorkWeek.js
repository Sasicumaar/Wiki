var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var WorkWeek = app_model.WorkWeek;
var globals = connector.__globals;

exports.HRMWorkWeekInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var WorkWeekCode = req.body.WorkWeekCode;
    var WorkWeekDescription = req.body.WorkWeekDescription;
    var TotalWorkingHours = req.body.TotalWorkingHours;
    var Monday = req.body.Monday;
    var Tuesday = req.body.Tuesday;
    var Wednesday = req.body.Wednesday;
    var Thursday = req.body.Thursday;
    var Friday = req.body.Friday;
    var Saturday = req.body.Saturday;
    var Sunday = req.body.Sunday;
    var SaturdayOff = req.body.SaturdayOff;
    var CreatedBy = req.body.CreatedBy;
    
    var workweek = new WorkWeek({
        CompanyID : CompanyID,
        WorkWeekCode : WorkWeekCode,
        WorkWeekDescription : WorkWeekDescription,
        TotalWorkingHours : TotalWorkingHours,
        Monday : Monday,
        Tuesday : Tuesday,
        Wednesday : Wednesday,
        Thursday : Thursday,
        Friday : Friday,
        Saturday : Saturday,
        Sunday : Sunday,
        SaturdayOff : SaturdayOff,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    workweek.save().then(function (Result) {
        res.json(globals.createResponse("HRMWorkWeek Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMWorkWeekGet = function (req, res) {
    WorkWeek.findAll().then(List => res.json(List))
};
exports.PutSECRole = function (req, res) {
    var CompanyID = req.body.CompanyID;
    var WorkWeekCode = req.body.WorkWeekCode;
    var WorkWeekDescription = req.body.WorkWeekDescription;
    var TotalWorkingHours = req.body.TotalWorkingHours;
    var Monday = req.body.Monday;
    var Tuesday = req.body.Tuesday;
    var Wednesday = req.body.Wednesday;
    var Thursday = req.body.Thursday;
    var Friday = req.body.Friday;
    var Saturday = req.body.Saturday;
    var Sunday = req.body.Sunday;
    var SaturdayOff = req.body.SaturdayOff;
    var UpdatedBy = req.body.UpdatedBy;

    WorkWeek.update(
        {

            CompanyID : CompanyID,
            WorkWeekCode : WorkWeekCode,
            WorkWeekDescription : WorkWeekDescription,
            TotalWorkingHours : TotalWorkingHours,
            Monday : Monday,
            Tuesday : Tuesday,
            Wednesday : Wednesday,
            Thursday : Thursday,
            Friday : Friday,
            Saturday : Saturday,
            Sunday : Sunday,
            SaturdayOff : SaturdayOff,
            UpdatedBy: UpdatedBy
        }, { returning: true, where: { ID: req.params.ID } }


    ).then(function (data) {

        if (data != null) {
            // data = data.toObject({ selector: 1, transform: true, versionKey: false });
            res.json(globals.createResponse("WorkWeek updated successfully", data, 200));
        }
        else {
            res.json(globals.createEResponse("Invalid WorkWeek", 500));
        }
    })
}
exports.DeleteSECRole = function (req, res) {
    var ID = req.params.ID;
    WorkWeek.destroy({
        where: {
            ID: ID
        }
    }).then(function (result) {
        res.json(globals.createResponse("WorkWeek deleted successfully", result, 200));
    }).catch(function (e) {
        res.json(globals.createEResponse(e.message, 500));
    })
};