var commonApp = require("./common-app");

var loginPage = require("./pages/auth/login/login");
var signupPage = require("./pages/auth/signup/signup");

commonApp.register('admin', 'login');

loginPage.register();
signupPage.register();

