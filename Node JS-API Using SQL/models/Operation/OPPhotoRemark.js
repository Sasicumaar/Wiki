module.exports = {
    init: function (globals, sequelize, Sequelize) {
        // freezeTableName: true,
        var modelName = "PhotoRemark";
        var Schema = sequelize.define('OPPhotoRemark',
            {
                CompanyID: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
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
 