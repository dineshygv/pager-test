var commonApp = require("./common-app");

var loginPage = require("./pages/auth/login/login");
var signupPage = require("./pages/auth/signup/signup");

commonApp.register('auth', 'login');

loginPage.register();
signupPage.register();

