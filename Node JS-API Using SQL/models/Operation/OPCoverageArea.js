module.exports = {
    init: function (globals, sequelize, Sequelize) {
        
        var modelName = "CoverageArea";
        var Schema = sequelize.define('OPCoverageArea',
            {
                CompanyID: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                AffectedArea: {
                    type: Sequelize.STRING,
                },  
                AreaCode: {
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
                }, 
            },
            { 
                    timestamps:false ,
                    freezeTableName: true,
            } 
        )
        return { modelName, Schema }
    }
}; 
 