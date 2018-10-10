var path = require("path");
var connector = require(path.join(__appbase, "config", "connector.js"));
var app_model = connector.app_model;
var Workflow = app_model.Workflow;
var globals = connector.__globals;

exports.SECWorkflowInsert = function (req, res) {

    var CompanyID = req.body.CompanyID;
    var TypeName = req.body.TypeName;
    var Action = req.body.Action;
    var Actioned = req.body.Actioned;
    var Approvers = req.body.Approvers;
    var NotifyTo = req.body.NotifyTo;
    var AlwaysNotifyTo = req.body.AlwaysNotifyTo;
    var EmailExceptions = req.body.EmailExceptions;
    var Level = req.body.Level;
    var NextLevel = req.body.NextLevel;
    var ShowCancelButton = req.body.ShowCancelButton;
    var ShowRejectButton = req.body.ShowRejectButton;
    var ShowReviseButton = req.body.ShowReviseButton;
    var Mandatory = req.body.Mandatory;
    var EmailNotification = req.body.EmailNotification;
    var NotifytoCurrentApprover = req.body.NotifytoCurrentApprover;
    var NotifytoNextLevelApprover = req.body.NotifytoNextLevelApprover;
    var NotifytoCreatorInitator = req.body.NotifytoCreatorInitator;
    var CreatedBy = req.body.CreatedBy;

    var workflow = new Workflow({
        CompanyID : CompanyID,
        TypeName : TypeName,
        Action : Action,
        Actioned: Actioned,
        Approvers : Approvers,
        NotifyTo : NotifyTo,
        AlwaysNotifyTo : AlwaysNotifyTo,
        EmailExceptions : EmailExceptions,
        Level : Level,
        NextLevel : NextLevel,
        ShowCancelButton : ShowCancelButton,
        ShowRejectButton : ShowRejectButton,
        ShowReviseButton : ShowReviseButton,
        Mandatory : Mandatory,
        EmailNotification : EmailNotification,
        NotifytoCurrentApprover : NotifytoCurrentApprover,
        NotifytoNextLevelApprover : NotifytoNextLevelApprover,
        NotifytoCreatorInitator : NotifytoCreatorInitator,
        CreatedBy : CreatedBy

    });
    workflow.save().then(function (Result) {
        res.json(globals.createResponse("Workflow Created Successfully", Result, 200));
    })
        .catch(err => {
            res.json(globals.createEResponse(err.message, 500));
        });
};
exports.SECWorkflowUpdate = function (req, res) {

    var ID = req.body.ID;
    var TypeName = req.body.TypeName;
    var Action = req.body.Action;
    var Actioned = req.body.Actioned;
    var Approvers = req.body.Approvers;
    var NotifyTo = req.body.NotifyTo;
    var AlwaysNotifyTo = req.body.AlwaysNotifyTo;
    var EmailExceptions = req.body.EmailExceptions;
    var Level = req.body.Level;
    var NextLevel = req.body.NextLevel;
    var ShowCancelButton = req.body.ShowCancelButton;
    var ShowRejectButton = req.body.ShowRejectButton;
    var ShowReviseButton = req.body.ShowReviseButton;
    var Mandatory = req.body.Mandatory;
    var EmailNotification = req.body.EmailNotification;
    var NotifytoCurrentApprover = req.body.NotifytoCurrentApprover;
    var NotifytoNextLevelApprover = req.body.NotifytoNextLevelApprover;
    var NotifytoCreatorInitator = req.body.NotifytoCreatorInitator;
    var UpdatedBy = req.body.UpdatedBy;

        Workflow.update({
        TypeName : TypeName,
        Action : Action,
        Actioned: Actioned,
        Approvers : Approvers,
        NotifyTo : NotifyTo,
        AlwaysNotifyTo : AlwaysNotifyTo,
        EmailExceptions : EmailExceptions,
        Level : Level,
        NextLevel : NextLevel,
        ShowCancelButton : ShowCancelButton,
        ShowRejectButton : ShowRejectButton,
        ShowReviseButton : ShowReviseButton,
        Mandatory : Mandatory,
        EmailNotification : EmailNotification,
        NotifytoCurrentApprover : NotifytoCurrentApprover, 
        NotifytoNextLevelApprover : NotifytoNextLevelApprover,
        NotifytoCreatorInitator : NotifytoCreatorInitator,
        UpdatedBy : UpdatedBy,
        UpdatedDate: globals.Moment.utc()
        },
        { where: {ID: ID} }).then(function (Result) {
            res.json(globals.createResponse("Workflow Updated Successfully", Result, 200));
        })
            .catch(err => {
                res.json(globals.createEResponse(err.message, 500));
            });
};
exports.SECWorkflowByCompany = function(req, res){

}
exports.GetbyTypeName = function(req, res){

    var TypeName = req.body.TypeName;
    Workflow.findAll({where: {TypeName : TypeName, IsActive : 1}}).then(List => res.json(List))
}

exports.SECWorkflowGet = function (req, res) {
    
    Workflow.findAll().then(List => res.json(List))
}; 