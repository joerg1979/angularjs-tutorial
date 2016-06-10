"use strict";
// create app.module
var app = angular.module('app', ['app.users']);
// init interval-variable
var intervalID;

var con = 1;
var conin = 1;
var rn = 1;
var rnin = 1;
// 1. Running first when script is included

app.config(function () {
    console.info("app.config() started the " + con + ". time");
    con++;
    if ($("body").attr('ng-app') === "app") {
        console.info("app.config() started inside IF the " + conin + ". time");
        conin++;
        console.info("app.config() finished "+ (conin-1) +".time");
    }
});
//Running on init this module

app.run(function () {
    console.log("app.run() started the " + rn + ". time");
    rn++;
    if ($("body").attr('ng-app') === "app") {
        console.log("app.run() started the insideIF the " + rnin + ". time (body has ng-app='app')");
        rnin++;
        console.log("app.run() insideIF will try to removeAttr('ng-app') & .removeClass('ng-scope')");
        $("body").removeAttr('ng-app');
        $("body").removeClass("ng-scope");
        alert("BODY.hasClass('ng-scope')? : "+ $('body').hasClass("ng-scope"));
        
        console.log("app.ready() sets trigger on doc.readyState to run angular.bootstrap()");
// } else{
        intervalID = setInterval(function () {
            if (/loaded|complete/i.test(document.readyState)) {
                console.info("angular.bootstrap() starting");
                angular.bootstrap(document, ['app']);
                clearInterval(intervalID);
                if ($('body').hasClass("ng-scope")) {
                    console.info("angular.app has been started again, now via bootstrap() starting");
                }
            }
        }, 10);
    } else {
        
        console.info("angular.app starting again via bootstrap() FINISHED!!!");
    }
});
