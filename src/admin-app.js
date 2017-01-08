var commonApp = require("./common-app");

var userPage = require("./pages/admin/user/user");

commonApp.register('admin', 'user');

userPage.register();

