const Sequelize = require('sequelize');
var sequelize = require("./database.js").sequelize;
var fs = require("fs");
var path = require("path"); 
var Async = require('async');
var moment = require("moment");
var model_dir = path.join(__appbase, "models","Operation");
var route_dir = path.join(__appbase, "routes");
var __ = require("underscore");
var jwt = require('jsonwebtoken')
var EmailPath = require(__dirname + path.sep + "defaults" + path.sep + "email.json");

var Email_UserName = EmailPath["Email_UserName"];
var Email_Password = EmailPath["Email_Password"];

var globals = (function () {
    return {
        sequelize: sequelize, 
        Moment: moment,
        Async: Async,
        MODEL_DIR: model_dir,
        ROUTE_DIR: route_dir,
        fs: fs,
        _underscore: __,
        lodash: __,
        EmailUserName: Email_UserName,
        EmailPassword: Email_Password,
        DATE_FORMAT_1: "YYYY-MM-DD",
        setOpts: function (query, opts, selectorList) {
            if (opts.isLean) {
                query.lean();
            }
            if (opts.selector) {
                var selectorIndex = opts.selector;
                if (selectorIndex > -1 && selectorIndex < selectorList.length)
                    query.select(selectorList[selectorIndex]);
            }
            return query;
        },
        checkValue: function (value) {
            return typeof value == "undefined" || value == "null" || value == null;
        },
        checkEmptyString: function (value) {
            return value.length == 0;
        },
        checkUndefined: function (value) {
            return typeof value == "undefined";
        },
        checkValueEmpty: function (value) {
            return typeof value == "undefined" || value == "null" || value == null || value.length == 0;
        },
        checkValueSetEmptyString: function (value) {
            return this.checkUndefined(value) ? "" : value;
        },
        createResponse: function (message, data, code) {
            if (typeof code == "undefined") {
                code = 200;
            }
            var responseObj = {
                statusCode: code,
                message: message
            };
            if (typeof data !== "undefined" || data !== null) {
                responseObj["data"] = data;
            }
            return responseObj;
        },
        createEResponse: function (message, code) {
            if (typeof code == "undefined") {
                code = 204;
            }
            if (message.length == 0) {
                message = "Internal Server Error";
            }
            return {
                statusCode: code,
                message: message
            };
        }
    };
})();

function initializeModels() {
    const models = {};
    fs.readdirSync(model_dir).forEach(function (name) {
        var file_path = path.join(model_dir, name);
        var stat = fs.statSync(file_path);
        if (stat.isFile()) {
            var result = require(file_path).init(globals, sequelize, Sequelize);
            var key = result.modelName
            models[key] = result.Schema;
        }
    });
    sequelize.sync({ force: false })
    
        .then(() => {
            console.log(`Database & tables are created . . .`)
        });
        
    return models;
}

var models = initializeModels();
exports.__globals = globals;
exports.app_model = models;
exports.sequelize = sequelize; 