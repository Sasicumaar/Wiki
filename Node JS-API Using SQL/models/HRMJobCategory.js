module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "JobCategory";
        var Schema = sequelize.define('HRMJobCategory',
            {
                ID: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                CompanyID: {
                    type: Sequelize.BIGINT
                },
                Name: {
                    type: Sequelize.STRING,
                },
                Code : {
                    type: Sequelize.STRING
                },
                Description : {
                    type: Sequelize.STRING
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