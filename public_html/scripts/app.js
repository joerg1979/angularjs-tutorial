"use strict";
// create app.module
var app = angular.module('app', []);
// init interval-variable and counters
var intervalID;var con = 1;var conin = 1;var rn = 1;var rnin = 1;

// 1. Running first when script is included and no dependencies are included
app.config(function () {    
    if(con < 1){
        $('#showBOOTSTRAPPConsole').append("<p>app.config() started the " + con + ". time</p>");
    }else {
        $('#showNGAPPConsole').append("<p>app.config() started the " + con + ". time</p>");
    }
    con++;
    // checking for ng-app directive is used, or allready deleted
    if ($("body").attr('ng-app') === "app") {
        $('#showNGAPPConsole').append("<p>app.config() started inside IF the " + conin + ". time</p>");
        $('#showNGAPPConsole').append("<p>app.config() finished "+ conin +".time</p>");
        conin++;
    } else {
        $('#showBOOTSTRAPConsole').append("<p>app.config() inside ELSE: after bootstrapping-start no ng-app was found in body-tag</p>");
    }
});

//2. Running after config() has benn finished
app.run(function () {
    if(rn < 1){
        $('#showBOOTSTRAPPConsole').append("<p>app.run() started the " + rn + ". time</p>");
    }else {
        $('#showNGAPPConsole').append("<p>app.run() started the " + rn + ". time</p>");
    }
    rn++;    
    // checking for ng-app directive is used, or allready deleted
    if ($("body").attr('ng-app') === "app") {
        $('#showNGAPPConsole').append("<p>app.run() started the insideIF the " + rnin + ". time (body has ng-app='app')</p>");
        rnin++;
        $('#showNGAPPConsole').append("<p>app.run() insideIF will try to removeAttr('ng-app') & .removeClass('ng-scope')</p>");
        // remove ng-app and scope
        $("body").removeAttr('ng-app');
        $("body").removeClass("ng-scope");
        // verify that there is no more angular inside body-tag
        alert(" Sucessfully removed ng-scope from <body>? -> "+ !($('body').hasClass("ng-scope")));        
        $('#showNGAPPConsole').append("<p>app.ready() sets trigger on doc.readyState to run angular.bootstrap()</p>");
// } else{
        // wait for document.ready and run "manual" angular.bootstrap to add angular again
        intervalID = setInterval(function () {
            // check readyState
            if (/loaded|complete/i.test(document.readyState)) {
                $('#showBOOTSTRAPPConsole').append("<p>angular.bootstrap() starting</p>");
                // run manual bootstrapping
                angular.bootstrap(document, ['app']);
                // stop testing the readyState
                clearInterval(intervalID);
                // check wheather angular is in body-tag AGAIN and report
                if ($('body').hasClass("ng-scope")) {                    
                   $('#showBOOTSTRAPPConsole').append("<p>angular.app starting again via .bootstrap() completed!!!</p>");
                }
            }
        }, 10);
    } else {
        // bootsrapping sucessfully added ng-app again
         $('#showBOOTSTRAPPConsole').append("<p>app.run() insideELSE, angular.app was started by .bootstrap()</p>");
    }
});
