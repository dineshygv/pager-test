var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

app.get(['/', '/login', '/signup'], function(req, res){
    console.log("request for : " + req.path);
    res.sendFile(__dirname + "\\index.html");
});

app.get('*', function(req, res){
    console.log("generic request for : " + req.path);
    res.sendFile(__dirname + req.path);
});

app.listen(port);

console.log("server listening on " + port);