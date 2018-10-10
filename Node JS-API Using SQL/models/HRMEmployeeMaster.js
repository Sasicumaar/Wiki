module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "EmployeeMaster";
        var Schema = sequelize.define('HRMEmployeeMaster',
            {
                ID: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                CompanyID: {
                    type: Sequelize.BIGINT
                },
                EmployeeCode: {
                    type: Sequelize.STRING,
                },
                EmployeeName :{
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                DOB: {
                    type: Sequelize.DATE,
                },
                Identification : {
                    type: Sequelize.STRING
                },
                Nationality :{
                    type: Sequelize.STRING
                },
                Race :{
                    type: Sequelize.STRING
                },
                Sex :{
                    type: Sequelize.STRING
                },
                EducationBackground :{
                    type: Sequelize.STRING
                },
                SubsidiaryCompanyID :{
                    type: Sequelize.BIGINT
                },
                BusinessUnit :{
                    type: Sequelize.STRING
                },
                Rank :{
                    type: Sequelize.STRING
                },
                JobTitle :{
                    type: Sequelize.STRING
                },
                StartOfEmployeement :{
                    type: Sequelize.DATE
                },
                Status :{
                    type: Sequelize.STRING
                },
                EmployeedBy :{
                    type: Sequelize.STRING
                },
                ReportingOfficer :{
                    type: Sequelize.STRING
                },
                JobDescription :{
                    type: Sequelize.STRING
                },
                PromotionHistory :{
                    type: Sequelize.STRING
                },
                TransferHistory :{
                    type: Sequelize.STRING
                },
                WorkHistory :{
                    type: Sequelize.STRING
                },
                PerformanceAppraisal :{
                    type: Sequelize.STRING
                },
                TrainingRecord :{
                    type: Sequelize.STRING
                },
                CertificationRecord :{
                    type: Sequelize.STRING
                },
                ItemList :{
                    type: Sequelize.STRING
                },
                Email : {
                    type: Sequelize.STRING
                },
                Phone: {
                    type: Sequelize.STRING
                },
                Address: {
                    type: Sequelize.STRING
                },
                MaritalStatus: {
                    type: Sequelize.STRING
                },
                PlaceOfBirth: {
                    type: Sequelize.STRING
                },
                VisaType: {
                    type: Sequelize.STRING
                },
                NricNumber: {
                    type: Sequelize.STRING
                },
                NricIssueDate: {
                    type: Sequelize.DATE
                },
                NricExpiryDate : {
                    type: Sequelize.DATE
                },
                PassportNumber:{
                    type: Sequelize.STRING
                },
                SPassNumber :{
                    type: Sequelize.STRING
                },
                PassportIssueDate :{
                    type: Sequelize.DATE
                },
                CreatedBy: {
                    type: Sequelize.STRING
                },
                UpdatedBy: {
                    type: Sequelize.STRING
                },
                IsActive: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: '1'
                },
                CreatedDate: {
                    type: Sequelize.DATE,
                },
                UpdatedDate: {
                    type: Sequelize.DATE, 
                }
            },
            {
                timestamps: false,
            }
        )
        Schema.removeAttribute('id');
        return { modelName, Schema }
    }
};