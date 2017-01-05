var template = require("raw!./login.html");
var page = require("page");
var ko = require("knockout");

function authLoginLayout(params) {
    
}

function register(layoutParams) {
    ko.components.register('auth-login', {
        viewModel: authLoginLayout,
        template: template
    });
}

module.exports = {
    register: register
}