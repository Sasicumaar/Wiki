var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var SchedulerPhotos = app_model.SchedulerPhotos;
var sequelize = connector.sequelize;
var globals = connector.__globals;

exports.InsertPhotos = function (req, res) {
    var SchedulerID = req.body.SchedulerID;
    var PhotoBefore = req.body.PhotoBefore;
    var PhotoAfter = req.body.PhotoAfter;
    var CreatedBy = req.body.CreatedBy;

    var schedulerPhotos = new SchedulerPhotos({
        SchedulerID: SchedulerID,
        PhotoBefore: PhotoBefore,
        PhotoAfter: PhotoAfter,
        CreatedBy: CreatedBy,
    });
    schedulerPhotos.save().then(function (Result) {
        res.json(globals.createResponse("SchedulerPhotos Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.GETAll = function (req, res) { 
    sequelize.query('SELECT * FROM OPSchedulerPhotos',
        { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
    ).then(projects => {
        res.send(projects)
    });
}; 