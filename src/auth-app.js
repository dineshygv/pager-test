// common app contains stuff common to all layouts.
// it is used in all xxx-app.js files by calling register
var commonApp = require("./common-app");

// register individual pages that are used by this layout 
// each of these register methods should register a knockout component
var loginPage = require("./pages/auth/login/login");
var signupPage = require("./pages/auth/signup/signup");

// first param is the layout base path and second one is default page(optional)
commonApp.register('auth', 'login');

loginPage.register();
signupPage.register();

