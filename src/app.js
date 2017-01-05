var page = require("page");
var ko = require("knockout");
var $ = require("jquery");
var urlUtil = require("./utils/url");
var authLayout = require("./pages/auth/auth");

page.base('/#');

// Default page is auth/login
var layoutParams = ko.observable({
    layoutName : 'auth',
    pageParams : {        
        pageName: 'login'
    }
});

page('/:layout/:page/:param', function(ctx, next) {
    layoutParams({
        layoutName : ctx.params.layout,
        pageParams : {        
            pageName: ctx.params.page,
            param: ctx.params.param,
            queryParams: urlUtil.parseQueryString(ctx.querystring)
        }
    });
});

page('/:layout/:page', function(ctx, next) {
    layoutParams({
        layoutName : ctx.params.layout,
        pageParams : {        
            pageName: ctx.params.page,
            queryParams: urlUtil.parseQueryString(ctx.querystring)
        }
    });
});

page('/:layout', function(ctx, next) {
    layoutParams({
        layoutName : ctx.params.layout,
        pageParams : {
            queryParams: urlUtil.parseQueryString(ctx.querystring)
        }
    });
});

page('*', function(ctx, next) {
    layoutParams({
        layoutName : 'auth',
        pageParams : {        
            pageName: 'login'
        }
    });
});

// Register layouts
authLayout.register();


$(function(){
    page.start();
    ko.applyBindings(layoutParams, document.getElementById("layoutContainer"));
});
