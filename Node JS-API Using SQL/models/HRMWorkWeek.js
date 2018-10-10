module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "Workweek";
        var Schema = sequelize.define('HRMWorkWeek',
            {
                ID: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                CompanyID: {
                    type: Sequelize.BIGINT
                },
                WorkWeekCode: {
                    type: Sequelize.STRING,
                },
                WorkWeekDescription : {
                    type: Sequelize.STRING
                },
                TotalWorkingHours : {
                    type: Sequelize.STRING
                },
                Monday : {
                    type: Sequelize.STRING
                },
                Tuesday : {
                    type: Sequelize.STRING
                },
                Wednesday : {
                    type: Sequelize.STRING
                },
                Thursday : {
                    type: Sequelize.STRING
                },
                Friday : {
                    type: Sequelize.STRING
                },
                Saturday : {
                    type: Sequelize.STRING
                },
                Sunday : {
                    type: Sequelize.STRING
                },
                SaturdayOff : {
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