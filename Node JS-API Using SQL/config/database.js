const Sequelize = require('sequelize');
var path = require("path");
var dbPath = require(__dirname + path.sep + "defaults" + path.sep + "db.json").dbconfig;
var exports = module.exports = {};
exports.init = function (env, dbCallBack) {
  const sequelize = new Sequelize(dbPath.database, dbPath.user, dbPath.password, {
    dialect: 'mssql',
    dialectOptions: {
      instanceName: 'MSSQLSERVER2014',
      encrypt: true
    },
    define: { 
      freezeTableName: true
  }
  });
  sequelize.authenticate()
    .then((recordset) => { 
      dbCallBack(recordset);
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
      dbCallBack("DB Connection Error: " + err);
    });
  exports.sequelize = sequelize;
  exports.release = function () {
    sequelize.close();
  };
};
