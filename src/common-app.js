var page = require("page");
var ko = require("knockout");
var $ = require("jquery");
var urlUtil = require("./utils/url");

function register(basePath, defaultPage) {    
    defaultPage = defaultPage || '';

    // set the base path to the layout name
    // for eg, for auth url is like /auth#somepagename
    page.base('/' + basePath + '#');

    // default params
    // page name is the name of page and page params
    // contain queryParams and url param if any
    var layoutParams = ko.observable({
        pageName : defaultPage,
        pageParams : {}
    });

    // matches something like /admin#user/123?name=apple
    // here, pagename is user, param is 123 
    // queryParams is an obejct with one key, name and value apple
    page('/:page/:param', function(ctx, next) {
        layoutParams({
            pageName : ctx.params.page,
            pageParams : {
                param: ctx.params.param,
                queryParams: urlUtil.parseQueryString(ctx.querystring)
            }
        });
    });

    // same as above but without the 123 param
    page('/:page', function(ctx, next) {
        var pageName = ctx.params.page;

        // there is a weird behaviour in page.js
        // if you go to http://domian.name/auth, it 
        // redirects to /auth#auth, so, this code redirects it to 
        // /auth#login, which is default page
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

    // same as first one, without page name, in which case,
    // default page is loaded
    page('/', function(ctx, next) {
        layoutParams({
            pageName : defaultPage,
            pageParams : {
                queryParams: urlUtil.parseQueryString(ctx.querystring)
            }
        });
    });

    // generic matcher, redirect to default page again
    // this could be even changed to 404 later
    page('*', function(ctx, next) {
        layoutParams({
            pageName : defaultPage,
            pageParams : {}
        });
    });

    // start page.js and bind the page to knockout component
    $(function(){
        page.start();
        ko.applyBindings(layoutParams, document.getElementById("pageContainer"));
    });
}

module.exports = {
    register : register
};
