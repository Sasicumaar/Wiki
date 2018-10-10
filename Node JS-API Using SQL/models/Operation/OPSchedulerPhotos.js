module.exports = {
    init: function (globals, sequelize, Sequelize) {
        var modelName = "SchedulerPhotos";
        var Schema = sequelize.define('OPSchedulerPhotos',
            {
                SchedulerID: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                PhotoBefore: {
                    type: Sequelize.BOOLEAN,
                },
                PhotoAfter: {
                    type: Sequelize.BOOLEAN,
                },
                PestType: {
                    type: Sequelize.STRING,
                },
                Remarks: {
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