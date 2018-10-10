module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "UserRole";
        var Schema = sequelize.define('SECUserRoles',
            {
                ID: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                RoleID:{
                    type:Sequelize.BIGINT,
                },
                UserID:{
                    type:Sequelize.BIGINT,
                },
                CreatedBy: {
                    type: Sequelize.STRING
                },
                UpdatedBy: {
                    type: Sequelize.STRING
                },
                CreatedDate: {
                    type: Sequelize.DATE
                },
                UpdatedDate: {
                    type: Sequelize.DATE, 
                },
                IsActive: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: '1'
                }
            },  {
                timestamps: false,
            }
        )
        Schema.removeAttribute('id');
        return { modelName, Schema }
    }
};