module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "Role";
        var Schema = sequelize.define('SECRoles',
            {
                ID: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                RoleName:{
                    type:Sequelize.STRING,
                },
                ModuleName:{
                    type:Sequelize.STRING,
                },
                Description:{
                    type:Sequelize.STRING,
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