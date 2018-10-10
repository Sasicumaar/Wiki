module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "Workflow";
        var Schema = sequelize.define('SECWorkflows',
            {
                ID: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                CompanyID: {
                    type: Sequelize.BIGINT,
                    allowNull: false,
                },
                TypeName:{
                    type:Sequelize.STRING,
                    allowNull: false,
                },
                Action:{
                    type:Sequelize.STRING
                },
                Actioned:{
                    type:Sequelize.STRING
                },
                Approvers:{
                    type:Sequelize.STRING
                },
                NotifyTo:{
                    type:Sequelize.STRING
                },
                AlwaysNotifyTo:{
                    type:Sequelize.STRING
                },
                EmailExceptions:{
                    type:Sequelize.STRING
                },
                Level:{
                    type:Sequelize.INTEGER,
                    allowNull:false
                },
                NextLevel:{
                    type:Sequelize.INTEGER,
                    allowNull:false
                },
                ShowCancelButton:{
                    type:Sequelize.BOOLEAN,
                    allowNull:false,
                    defaultValue: 0
                },
                ShowRejectButton:{
                    type:Sequelize.BOOLEAN,
                    allowNull:false,
                    defaultValue: 0
                },
                ShowReviseButton:{
                    type:Sequelize.BOOLEAN,
                    allowNull:false,
                    defaultValue: 0
                },
                Mandatory:{
                    type:Sequelize.BOOLEAN,
                    allowNull:false,
                    defaultValue: 0
                },
                EmailNotification:{
                    type:Sequelize.BOOLEAN,
                    allowNull:false,
                    defaultValue: 0
                },
                NotifytoCurrentApprover:{
                    type:Sequelize.BOOLEAN,
                    allowNull:false,
                    defaultValue: 0
                },
                NotifytoNextLevelApprover:{
                    type:Sequelize.BOOLEAN,
                    allowNull:false,
                    defaultValue: 0
                },
                NotifytoCreatorInitator:{
                    type:Sequelize.BOOLEAN,
                    allowNull:false,
                    defaultValue: 0
                },
                CreatedBy: {
                    type: Sequelize.STRING
                },
                UpdatedBy: {
                    type: Sequelize.STRING
                },
                CreatedDate: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW()
                },
                UpdatedDate: {
                    type: Sequelize.DATE, 
                },
                IsActive: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: '1'
                }
            },  {
                timestamps: false,
            }
        )
        Schema.removeAttribute('id');
        return { modelName, Schema }
    }
};