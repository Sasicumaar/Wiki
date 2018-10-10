var path = require("path");
var VerifyToken = require(path.join(__appbase, "routes", "Authorization", "VerifyToken.js"));

exports.init = function (app) {
  var route_main = path.join(__dirname, "routes");  

  //app.use(VerifyToken)

  var Authorization_route = require(route_main + path.sep + "Authorization" + path.sep + "Authorization_route.js");
  app.use("/Authorization", Authorization_route.init_route());

  // Operation
  var OPSchedulerPhotos_route = require(route_main + path.sep + "Operation" + path.sep + "OPSchedulerPhotos_route.js");
  app.use("/OPSchedulerPhotos", OPSchedulerPhotos_route.init_route());
 
  var OPDivisions_route = require(route_main + path.sep + "Operation" + path.sep + "OPDivisions_route.js");
  app.use("/OPDivisions", OPDivisions_route.init_route()); 

  var OPPestType_route = require(route_main + path.sep + "Operation" + path.sep + "OPPestType_route.js");
  app.use("/OPPestType", OPPestType_route.init_route());

  var OPMaterial_route = require(route_main + path.sep + "Operation" + path.sep + "OPMaterial_route.js");
  app.use("/OPMaterial", OPMaterial_route.init_route());
//
  var OPService_route = require(route_main + path.sep + "Operation" + path.sep + "OPService_route.js");
  app.use("/OPService", OPService_route.init_route());

  var OPPhotoRemark_route = require(route_main + path.sep + "Operation" + path.sep + "OPPhotoRemark_route.js");
  app.use("/OPPhotoRemark", OPPhotoRemark_route.init_route());

  var OPCoverageArea_route = require(route_main + path.sep + "Operation" + path.sep + "OPCoverageArea_route.js");
  app.use("/OPCoverageArea", OPCoverageArea_route.init_route());

  var OPTeamManagement_route = require(route_main + path.sep + "Operation" + path.sep + "OPTeamManagement_route.js");
  app.use("/OPTeamManagement", OPTeamManagement_route.init_route());

  var OPSchedulerLogs_route = require(route_main + path.sep + "Operation" + path.sep + "OPSchedulerLogs_route.js");
  app.use("/OPSchedulerLogs", OPSchedulerLogs_route.init_route());  // Security
  var SECCompany_route = require(route_main + path.sep + "Security" + path.sep + "SECCompany_route.js");
  app.use("/SECCompanies", SECCompany_route.init_route());

  var SECWorkflow_route = require(route_main + path.sep + "Security" + path.sep + "SECWorkflow_route.js");
  app.use("/SECWorkflows", SECWorkflow_route.init_route());

  var SECUserRole_route = require(route_main + path.sep + "Security" + path.sep + "SECUserRole_route.js");
  app.use("/SECUserRole", SECUserRole_route.init_route());

  var SECRole_route = require(route_main + path.sep + "Security" + path.sep + "SECRole_route.js");
  app.use("/SECRole", SECRole_route.init_route());

  var SECUser_route = require(route_main + path.sep + "Security" + path.sep + "SECUser_route.js");
  app.use("/SECUser", SECUser_route.init_route());


  var CRMCreditTerm_route = require(route_main + path.sep + "CRMCreditTerm_route.js");
  app.use("/CRMCreditTerm", CRMCreditTerm_route.init_route());

  // HRM
  var HRMBank_route = require(route_main + path.sep + "HRM" + path.sep + "HRMBank_route.js");
  app.use("/HRMBank", HRMBank_route.init_route()); 

  var HRMCalender_route = require(route_main + path.sep + "HRM" + path.sep + "HRMCalender_route.js");
  app.use("/HRMCalender", HRMCalender_route.init_route()); 

  var HRMCostCentre_route = require(route_main + path.sep + "HRM" + path.sep + "HRMCostCentre_route.js");
  app.use("/HRMCostCentre", HRMCostCentre_route.init_route()); 

  var HRMCountry_route = require(route_main + path.sep + "HRM" + path.sep + "HRMCountry_route.js");
  app.use("/HRMCountry", HRMCountry_route.init_route()); 

  var HRMDivision_route = require(route_main + path.sep + "HRM" + path.sep + "HRMDivision_route.js");
  app.use("/HRMDivision", HRMDivision_route.init_route()); 

  var HRMEducation_route = require(route_main + path.sep + "HRM" + path.sep + "HRMEducation_route.js");
  app.use("/HRMEducation", HRMEducation_route.init_route()); 

  var HRMEmployeeMaster_route = require(route_main + path.sep + "HRM" + path.sep + "HRMEmployeeMaster_route.js");
  app.use("/HRMEmployeeMaster", HRMEmployeeMaster_route.init_route()); 

  var HRMEmploymentStatus_route = require(route_main + path.sep + "HRM" + path.sep + "HRMEmploymentStatus_route.js");
  app.use("/HRMEmploymentStatus", HRMEmploymentStatus_route.init_route()); 

  var HRMJobCategory_route = require(route_main + path.sep + "HRM" + path.sep + "HRMJobCategory_route.js");
  app.use("/HRMJobCategory", HRMJobCategory_route.init_route()); 

  var HRMJobTitle_route = require(route_main + path.sep + "HRM" + path.sep + "HRMJobTitle_route.js");
  app.use("/HRMJobTitle", HRMJobTitle_route.init_route()); 

  var HRMLanguage_route = require(route_main + path.sep + "HRM" + path.sep + "HRMLanguage_route.js");
  app.use("/HRMLanguage", HRMLanguage_route.init_route()); 

  var HRMLicense_route = require(route_main + path.sep + "HRM" + path.sep + "HRMLicense_route.js");
  app.use("/HRMLicense", HRMLicense_route.init_route()); 

  var HRMMembership_route = require(route_main + path.sep + "HRM" + path.sep + "HRMMembership_route.js");
  app.use("/HRMMembership", HRMMembership_route.init_route()); 

  var HRMNationality_route = require(route_main + path.sep + "HRM" + path.sep + "HRMNationality_route.js");
  app.use("/HRMNationality", HRMNationality_route.init_route()); 

  var HRMOrganization_route = require(route_main + path.sep + "HRM" + path.sep + "HRMOrganization_route.js");
  app.use("/HRMOrganization", HRMOrganization_route.init_route()); 

  var HRMOrganizationChart_route = require(route_main + path.sep + "HRM" + path.sep + "HRMOrganizationChart_route.js");
  app.use("/HRMOrganizationChart", HRMOrganizationChart_route.init_route()); 

  var HRMSkills_route = require(route_main + path.sep + "HRM" + path.sep + "HRMSkills_route.js");
  app.use("/HRMSkills", HRMSkills_route.init_route()); 

  var HRMVisaTypes_route = require(route_main + path.sep + "HRM" + path.sep + "HRMVisaTypes_route.js");
  app.use("/HRMVisaTypes", HRMVisaTypes_route.init_route()); 

  var HRMWorkWeek_route = require(route_main + path.sep + "HRM" + path.sep + "HRMWorkWeek_route.js");
  app.use("/HRMWorkWeek", HRMWorkWeek_route.init_route()); 
};
