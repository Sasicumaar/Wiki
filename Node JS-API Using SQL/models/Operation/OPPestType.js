module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "OPPestType";
        var Schema = sequelize.define('OPPestType',
            {
                CompanyID: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                DivisionName: {
                    type: Sequelize.STRING,
                },
                PestType: {
                    type: Sequelize.STRING,
                }, 
                PestCode: {
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
                }
            },
            { 
                timestamps:false ,
                freezeTableName: true,
        }
        )
        return { modelName, Schema }
    }
};