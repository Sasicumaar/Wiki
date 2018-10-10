module.exports = {
    init: function (globals, sequelize, Sequelize) {
        
        var modelName = "SchedulerLogs";
        var Schema = sequelize.define('OPSchedulerLogs',
            {
                CompanyID: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                ServiceID: {
                    type: Sequelize.STRING,
                },  
                Status: {
                    type: Sequelize.STRING,
                },
                StartDate: {
                    type: Sequelize.DATE,
                },
                EndDate: { 
                    type: Sequelize.DATE,
                }, 
                ServiceOn: {
                    type: Sequelize.STRING,
                },


                CreatedBy: {
                    type: Sequelize.STRING,
                },
                UpdatedBy: {
                    type: Sequelize.STRING,
                },
                IsActive: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: '1'
                },
                CreatedDate: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW()
                },
                UpdatedDate: {
                    type: Sequelize.DATE, 
                }, 
            },
            { 
                    timestamps:false ,
                    freezeTableName: true,
            } 
        )
        return { modelName, Schema }
    }
}; 
 