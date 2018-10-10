module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "User";
        var Schema = sequelize.define('SECUsers',
            {
                ID: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                UserName: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                LoginID: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                Email: {
                    type: Sequelize.STRING
                },
                MobileNumber: {
                    type: Sequelize.STRING
                },
                Password: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                ExpiryDate: {
                    type: Sequelize.DATE,
                },
                IsLocked: {
                    type: Sequelize.BOOLEAN
                },
                LastSuccess: {
                    type: Sequelize.DATE,
                    allowNull: true,
                },
                LastFailure: {
                    type: Sequelize.DATE,
                    allowNull: true,
                },
                EmployeeID: {
                    type: Sequelize.BIGINT,
                },
                CompanyID: {
                    type: Sequelize.STRING
                },
                AllowExport: {
                    type: Sequelize.BOOLEAN,
                },
                Pages_Visible: {
                    type: Sequelize.STRING,
                },
                Pages_Read: {
                    type: Sequelize.STRING,
                },
                Pages_Write: {
                    type: Sequelize.STRING,
                },
                Roles: {
                    type: Sequelize.STRING,
                },
                MobileAccess: {
                    type: Sequelize.STRING,
                },
                IPAddress: {
                    type: Sequelize.STRING,
                },
                CreatedBy: {
                    type: Sequelize.STRING
                },
                UpdatedBy: {
                    type: Sequelize.STRING
                },
                CreatedDate: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW()
                },
                UpdatedDate: {
                    type: Sequelize.DATE,
                },
                IsActive: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: '1'
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