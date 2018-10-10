var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var globals = connector.__globals;
var app_model = connector.app_model; 
var Attendance = app_model.Attendance;
var Client = app_model.Client;
var AutoAttendance = app_model.AutoAttendance;
var Workweek = app_model.Workweek;

var Moment = globals.Moment;
var isodate = require("isodate");
var ObjectId = require('mongoose').Types.ObjectId;
var objectId = require('mongoose').Types.ObjectId;


var cron = require('node-cron');
var Nexmo = require('nexmo');
var forEach = require('async-foreach').forEach;
 
cron.schedule('0 0 9 * * SUN-SAT', function () {
    var CurrentDate = new Date();
    var CheckCurrentDate = new Date();
    var Day = CurrentDate.getDay();

    var TimeIn = CurrentDate.setHours(8, 0, 0, 0);
    var TimeOut = CurrentDate.setHours(17, 0, 0, 0);
 
});

function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
}

exports.addNewAttendance = function (req, res) { 
    req.sanitizeBody("EmployeeID").trim(); 
    req.sanitizeBody("TimeIn").trim();
    req.sanitizeBody("TimeOut").trim(); 
    req.sanitizeBody("EntryType").trim();
    req.sanitizeBody("CreatedBy").trim();
    req.sanitizeBody("UpdatedBy").trim(); 
    req.getValidationResult().then(function (result) {
        if (result.isEmpty()) {
            var EmployeeID = req.body.EmployeeID; 
            var TimeIn = req.body.TimeIn;
            var TimeOut = req.body.TimeOut; 
            var EntryType = req.body.EntryType;
            var CreatedBy = req.body.CreatedBy;
            var UpdatedBy = req.body.UpdatedBy; 
             
            var attendance = new Attendance({
                EmployeeID: ObjectId(EmployeeID), 
                TimeIn: TimeIn,
                TimeOut: TimeOut, 
                EntryType: EntryType,
                CreatedBy: CreatedBy, 
                UpdatedBy: UpdatedBy
            });
            attendance.save(function (err, attendance) {
                if (err) {
                    console.log(err);
                    res.json(globals.createEResponse(err.message, 500));
                } else {
                    attendance = attendance.toObject({ selector: 1, transform: true, versionKey: false });
                    res.json(globals.createResponse("Attendance Added Successfully", attendance, 200));
                }
            });
        }

        else {
            res.json(globals.createEResponse(result.array()[0].msg, 422));
        }
    });

};

exports.modifyAttendance = function (req, res) {
    req.sanitizeBody("_id").trim();
    req.sanitizeBody("EmployeeID").trim(); 
    req.sanitizeBody("TimeIn").trim();
    req.sanitizeBody("TimeOut").trim(); 
    req.sanitizeBody("EntryType").trim(); 
    req.sanitizeBody("CreatedBy").trim();
    req.sanitizeBody("UpdatedBy").trim();  
    req.getValidationResult().then(function (result) {
        if (result.isEmpty()) {
            var s_id = req.body._id;
            var EmployeeID = req.body.EmployeeID; 
            var TimeIn = req.body.TimeIn;
            var TimeOut = req.body.TimeOut; 
            var UpdatedBy = req.body.UpdatedBy; 
 
            var updateAttendance = Attendance.findOneAndUpdate({ _id: s_id, IsActive: true },
                {
                    $set: {
                        EmployeeID: ObjectId(EmployeeID),  
                        TimeIn: TimeIn,
                        TimeOut: TimeOut, 
                        EntryType: EntryType, 
                        UpdatedBy: UpdatedBy, 
                        UpdatedDate: globals.Moment.utc()
                    }
                },
                { new: true }).exec();
            updateAttendance.then(function (data) {
                if (data != null) {
                    data = data.toObject({ selector: 1, transform: true, versionKey: false });
                    res.json(globals.createResponse("Attendance updated successfully", data, 200));
                }
                else {
                    res.json(globals.createEResponse("Invalid Attendance", 500));
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

exports.getAllAttendance = function (req, res) {

    req.sanitizeBody("Client_Id").trim();
    var Client_Id = req.body.Client_Id;
    Attendance.aggregate([
        {
            $match: {
                Client_Id: {
                    $eq: ObjectId(Client_Id)
                }
            }
        },
        {
            $lookup:
            {
                from: 'EmployeeID',
                localField: 'EmployeeID',
                foreignField: '_id',
                as: 'EmployeeIDdetails',
            }
        },
        {
            $unwind: "$EmployeeIDdetails"
        },
        
        {
            $project: {
                "_id": 1,
                "EmployeeID": 1, 
                "TimeIn": 1,
                "TimeOut": 1, 
                "EntryType": 1,
                "IsActive": 1,
                "CreatedBy": 1,
                "UpdatedBy": 1,
                "CreatedDate": 1,
                "UpdatedDate": 1,
                "EmployeeIDdetails._id": 1,
                "EmployeeIDdetails.EmployeeID": 1,
                "EmployeeIDdetails.EmployeeIDName": 1,  
            }
        }

    ]).then(function (attendanceList) {
        if (attendanceList != null) {
            res.json(globals.createResponse("attendance List Retrieved successfully", attendanceList, 200));
        }
        else {
            res.json(globals.createEResponse("Invalid attendanceList", 500));
        }
    });

};

exports.getAlldatefilterAttendance = function (req, res) {
    req.sanitizeBody("Start_Date").trim();
    req.sanitizeBody("End_Date").trim(); 
    var Start_Date = req.body.Start_Date;
    var End_Date = req.body.End_Date; 
    Attendance.aggregate([
        {
            $match: {
                TimeIn: {
                    $gte: isodate(Start_Date),
                    $lt: isodate(End_Date)
                } 
            }
        },
        {
            $lookup:
            {
                from: 'EmployeeID',
                localField: 'EmployeeID',
                foreignField: '_id',
                as: 'EmployeeIDdetails',
            }
        },
        {
            $unwind: "$EmployeeIDdetails"
        }, 
        {
            $project: {
                "_id": 1,
                "EmployeeID": 1, 
                "TimeIn": 1,
                "TimeOut": 1, 
                "EntryType": 1,
                "IsActive": 1,
                "CreatedBy": 1,
                "UpdatedBy": 1,
                "CreatedDate": 1,
                "UpdatedDate": 1,
                "EmployeeIDdetails._id": 1,
                "EmployeeIDdetails.EmployeeID": 1,
                "EmployeeIDdetails.EmployeeIDName": 1, 
            }
        }
    ]).then(function (fattendanceList) {
        if (fattendanceList != null) {
            res.json(globals.createResponse("attendance List Retrieved successfully", fattendanceList, 200));
        }
        else {
            res.json(globals.createEResponse("Invalid attendanceList", 500));
        }
    }); 
};
 
exports.deleteAttendance = function (req, res) {
    req.sanitizeBody("_id").trim();
    var A_id = req.body._id;
    var deleteAction = Attendance.find({ _id: A_id }).remove().exec();
    deleteAction.then(function (result) {
        res.json(globals.createResponse("Attendance deleted successfully", result, 200));
    }).catch(function (e) {
        res.json(globals.createEResponse(e.message, 500));
    });
};

 