var template = require("raw!./signup.html");
var page = require("page");
var ko = require("knockout");

function authSignupLayout(params) {
    
}

function register(layoutParams) {
    ko.components.register('signup', {
        viewModel: authSignupLayout,
        template: template
    });
}

module.exports = {
    register: register
}