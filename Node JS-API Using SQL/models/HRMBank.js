module.exports = {
    
    init: function (globals, sequelize, Sequelize) {
        var modelName = "Bank";
        var Schema = sequelize.define('HRMBank',
            {
                ID: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                CompanyID: {
                    type: Sequelize.BIGINT
                },
                BankName: {
                    type: Sequelize.STRING,
                },
                BankCode: {
                    type: Sequelize.STRING,
                },
                BIC : {
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
                    defaultValue: Sequelize.NOW()
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