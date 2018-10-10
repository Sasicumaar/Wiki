module.exports =  {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "CreditTerm";
        var Schema = sequelize.define('CRMCreditTerm', 
            {
                CompanyID: {
                    type: Sequelize.BIGINT
                },
                CreditTerm: {
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
            },
            {
                timestamps:false
            }
        )
        return { modelName, Schema }
    }
};
