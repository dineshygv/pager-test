page.base('/#');

page('/', root);

page('login', login);

page('signup', signup);

$(function(){
    page.start();
});

function root(){
    login();
}

function login(){
    $("#loginPage").show();
    $("#signupPage").hide();
}

function signup(){
    $("#loginPage").hide();
    $("#signupPage").show();
}
