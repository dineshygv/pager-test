var page = require("page");
var ko = require("knockout");
var $ = require("jquery");
var urlUtil = require("./utils/url");
var loginPage = require("./pages/auth/login/login");
var signupPage = require("./pages/auth/signup/signup");

function register(basePath, defaultPage) {    
    defaultPage = defaultPage || '';

    page.base('/' + basePath + '#');

    var layoutParams = ko.observable({
        pageName : defaultPage,
        pageParams : {}
    });

    page('/:page/:param', function(ctx, next) {
        layoutParams({
            pageName : ctx.params.page,
            pageParams : {
                param: ctx.params.param,
                queryParams: urlUtil.parseQueryString(ctx.querystring)
            }
        });
    });

    page('/:page', function(ctx, next) {
        var pageName = ctx.params.page;

        if(pageName == basePath){
            page("/" + defaultPage);
            return;
        }

        layoutParams({
            pageName : pageName,
            pageParams : {
                queryParams: urlUtil.parseQueryString(ctx.querystring)
            }
        });
    });

    page('/', function(ctx, next) {
        layoutParams({
            pageName : defaultPage,
            pageParams : {
                queryParams: urlUtil.parseQueryString(ctx.querystring)
            }
        });
    });

    page('*', function(ctx, next) {
        layoutParams({
            pageName : defaultPage,
            pageParams : {}
        });
    });

    $(function(){
        page.start();
        ko.applyBindings(layoutParams, document.getElementById("pageContainer"));
    });
}

module.exports = {
    register : register
};
