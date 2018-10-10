module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "OPDivisions";
        var Schema = sequelize.define('OPDivisions',
            {
                CompanyID: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                Name: {
                    type: Sequelize.STRING,
                },
                Description: {
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