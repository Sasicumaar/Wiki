module.exports = {
    init: function (globals, sequelize, Sequelize) {
        
        var modelName = "TeamManagement";
        var Schema = sequelize.define('OPTeamManagement',
            {
                CompanyID: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                TeamCode: {
                    type: Sequelize.STRING,
                },  
                TeamName: {
                    type: Sequelize.STRING,
                },
                TeamLead: {
                    type: Sequelize.STRING,
                },
                TeamMembers: {
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
 