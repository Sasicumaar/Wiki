module.exports = {
    init: function (globals, sequelize, Sequelize) {
        // freezeTableName: true,
        var modelName = "Service";
        var Schema = sequelize.define('OPService',
            {
                CompanyID: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                PestType: {
                    type: Sequelize.STRING,
                },
                Name: {
                    type: Sequelize.STRING,
                },
                Code: {
                    type: Sequelize.STRING,
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
 