var template = require("raw!./user.html");
var ko = require("knockout");

function adminUserLayout(params) {
    
}

function register(layoutParams) {
    ko.components.register('user', {
        viewModel: adminUserLayout,
        template: template
    });
}

module.exports = {
    register: register
}