module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "Material";
        var Schema = sequelize.define('OPMaterial',
            {
                CompanyID: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                PestType: {
                    type: Sequelize.STRING,
                },
                MaterialName: {
                    type: Sequelize.STRING,
                },
                MaterialCode: {
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