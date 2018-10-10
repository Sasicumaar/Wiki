var mongoose = require("./database.js").mongoose;
var fs = require("fs");
var path = require("path");
var current_version = "v1";
var Async = require('async');
var moment = require("moment");
var uniqid = require('uniqid');
var short_id = require("shortid");
var model_dir = path.join(__appbase, "models", current_version);
var route_dir = path.join(__appbase, "routes", current_version);
var validators_dir = path.join(__appbase, "routes", "validators");
var Schema = mongoose.Schema;
var __ = require("underscore");
var lodash = require("lodash");
var EmailPath = require(__dirname + path.sep + "defaults" + path.sep + "email.json");

var globals = (function () {
    return {
        mongoose: mongoose,
        VERSION: current_version,
        Schema: Schema,
        Moment: moment,
        Uniqid: uniqid,
        Async: Async,
        MODEL_DIR: model_dir,
        ROUTE_DIR: route_dir,
        VALIDATOR_DIR: validators_dir,
        fs: fs,
        _underscore: __,
        lodash: __,  
        ObjectId: mongoose.Types.ObjectId,
        Schema_ObjectId: mongoose.Schema.Types.ObjectId,
        SHORT_ID: short_id, 
        DATE_FORMAT_1: "YYYY-MM-DD",
        MODEL_LIST: {
            "Employee": "employee",  
            "Company": "Company",
            "User": "user",
            "Attendance": "attendance",  
        },
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
            /* if () {
             data = {};
             }*/
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
    fs.readdirSync(model_dir).forEach(function (name) {
        var file_path = path.join(model_dir, name);
        var stat = fs.statSync(file_path);
        if (stat.isFile()) {
            require(file_path).init(globals);
        }
    });
    var model_list = globals.MODEL_LIST;
    var models = {};
    var owns = Object.prototype.hasOwnProperty;
    for (var key in model_list) {
        if (owns.call(model_list, key)) {
            var value = model_list[key];
            models[key] = mongoose.model(value);
        }
    }
    return models;
}

var models = initializeModels();

exports.__globals = globals;
exports.app_model = models;