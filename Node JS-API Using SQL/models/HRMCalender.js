module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "Calender";
        var Schema = sequelize.define('HRMCalender',
            {
                ID: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                CompanyID: {
                    type: Sequelize.BIGINT
                },
                EventType: {
                    type: Sequelize.STRING,
                },
                EventTitle: {
                    type: Sequelize.STRING,
                },
                Description : {
                    type: Sequelize.STRING
                },
                StartDate :{
                    type: Sequelize.DATE
                },
                EndDate :{
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