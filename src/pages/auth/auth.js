var template = require("raw!./auth.html");
var page = require("page");
var ko = require("knockout");
var loginPage = require("./login/login");
var signupPage = require("./signup/signup");

function authLayout(params) {
    //Default page is login
    this.pageName = 'auth-' + (params.pageName || 'login');

    //Pass the params to pages
    this.pageParams = params;

    console.log("auth call");
}

function register() {
    ko.components.register('auth', {
        viewModel: authLayout,
        template: template
    });

    loginPage.register();
    signupPage.register();
}

module.exports = {
    register: register
}