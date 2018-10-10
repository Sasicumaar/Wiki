var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var EmployeeMaster = app_model.EmployeeMaster;
var globals = connector.__globals;

exports.HRMEmployeeMasterInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var EmployeeCode = req.body.EmployeeCode;
    var EmployeeName = req.body.EmployeeName;
    var DOB = req.body.DOB;
    var Identification = req.body.Identification;
    var Nationality = req.body.Nationality;
    var Race = req.body.Race;
    var Sex = req.body.Sex;
    var EducationBackground = req.body.EducationBackground;
    var SubsidiaryCompanyID = req.body.SubsidiaryCompanyID;
    var BusinessUnit = req.body.BusinessUnit;
    var Rank = req.body.Rank;
    var JobTitle = req.body.JobTitle;
    var StartOfEmployeement = req.body.StartOfEmployeement
    var Status = req.body.Status;
    var EmployeedBy = req.body.EmployeedBy;
    var ReportingOfficer = req.body.ReportingOfficer;
    var JobDescription = req.body.JobDescription;
    var PromotionHistory = req.body.PromotionHistory;
    var TransferHistory = req.body.TransferHistory;
    var WorkHistory = req.body.WorkHistory;
    var PerformanceAppraisal = req.body.PerformanceAppraisal;
    var TrainingRecord = req.body.TrainingRecord;
    var CertificationRecord = req.body.CertificationRecord;
    var ItemList = req.body.ItemList;
    var Email = req.body.Email;
    var Phone = req.body.Phone;
    var Address = req.body.Address;
    var MaritalStatus = req.body.MaritalStatus;
    var PlaceOfBirth = req.body.PlaceOfBirth;
    var VisaType = req.body.VisaType;
    var NricNumber = req.body.NricNumber;
    var NricIssueDate = req.body.NricIssueDate;
    var NricExpiryDate = req.body.NricExpiryDate;
    var PassportNumber = req.body.PassportNumber;
    var PassportExpiryDate = req.body.PassportExpiryDate;
    var SPassNumber = req.body.SPassNumber;
    var PassportIssueDate = req.body.PassportIssueDate;
    var CreatedBy = req.body.CreatedBy;
    
    var employeemaster = new EmployeeMaster({
        CompanyID : CompanyID,
        EmployeeCode : EmployeeCode,
        EmployeeName : EmployeeName,
        DOB : DOB,
        Identification : Identification,
        Nationality : Nationality,
        Race : Race,
        Sex : Sex,
        EducationBackground : EducationBackground,
        SubsidiaryCompanyID : SubsidiaryCompanyID,
        BusinessUnit : BusinessUnit,
        Rank : Rank,
        JobTitle : JobTitle,
        StartOfEmployeement : StartOfEmployeement,
        Status : Status,
        EmployeedBy : EmployeedBy,
        ReportingOfficer : ReportingOfficer,
        JobDescription:  JobDescription,
        PromotionHistory : PromotionHistory,
        TransferHistory : TransferHistory,
        WorkHistory : WorkHistory,
        PerformanceAppraisal : PerformanceAppraisal,
        TrainingRecord : TrainingRecord,
        CertificationRecord : CertificationRecord,
        ItemList : ItemList,
        Email : Email,
        Phone : Phone,
        Address : Address,
        MaritalStatus : MaritalStatus,
        PlaceOfBirth : PlaceOfBirth,
        VisaType:  VisaType,
        NricNumber :NricNumber,
        NricIssueDate : NricIssueDate,
        NricExpiryDate : NricExpiryDate,
        PassportNumber : PassportNumber,
        PassportExpiryDate : PassportExpiryDate,
        SPassNumber : SPassNumber,
        PassportIssueDate : PassportIssueDate,
        CreatedBy: CreatedBy,
        CreatedDate: new Date()

    });
    employeemaster.save().then(function (Result) {
        res.json(globals.createResponse("HRMEmployeeMaster Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.HRMEmployeeMasterGet = function (req, res) {
    EmployeeMaster.findAll().then(List => res.json(List))
};