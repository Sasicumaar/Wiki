module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "Membership";
        var Schema = sequelize.define('HRMMembership',
            {
                ID: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                CompanyID: {
                    type: Sequelize.BIGINT
                },
                MembershipName: {
                    type: Sequelize.STRING,
                },
                Association : {
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