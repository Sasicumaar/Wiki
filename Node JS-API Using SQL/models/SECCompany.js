module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "Company";
        var Schema = sequelize.define('SECCompanies',
            {
                CompanyName: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                CompanyCode: {
                    type: Sequelize.STRING,
                },
                RegistrationNumber: {
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
                    // defaultValue: Sequelize.NOW()
                },
                UpdatedDate: {
                    type: Sequelize.DATE, 
                }
            }
        )
        return { modelName, Schema }
    }
};