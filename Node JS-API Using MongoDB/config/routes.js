var path = require("path");

exports.init = function (app) {
  var route_main = path.join(__dirname, "routes"); 

  var employee_route = require(route_main + path.sep + "employee_route.js");   
  app.use("/employee", employee_route.init_route());

  var login_route = require(route_main + path.sep + "login_route.js");
  app.use("/login", login_route.init_route()); 

  var company_route = require(route_main + path.sep + "company_route.js"); 
  app.use("/company", company_route.init_route());

  var user_route = require(route_main + path.sep + "user_route.js");
  app.use("/user", user_route.init_route()); 

  var attendance_route = require(route_main + path.sep + "attendance_route.js");
  app.use("/attendance", attendance_route.init_route()); 
 
  
   
 
}
