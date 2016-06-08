"use strict";

var app = angular.module('app',['app.users']);

//Running on init this module
app.run( function () {
    console.log("app.run initialized");
});
// Running first when script is included
app.config( function () {
   console.error("app.config finished conifguration task"); 
});