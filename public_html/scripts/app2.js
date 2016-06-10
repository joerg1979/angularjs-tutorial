"use strict";
// 1. Define the Module
var app = angular.module('app2',['app.users']);

// 2. Set Variables and Constants
app.value('app2Headline','<h2>Showing angulars .value() & .constant() -Methods</h2>');
app.value('ValueInAction','<h3>The .value()-Methods</h3>');
app.value('ValueMethod','<li><b>The .value()-Method provides functionality to store/show content, save in a key-value based HashMap</b></li>');
app.value('dependency','<li><code>app.value("declaration","Injection stored an initial Value");</code></li>');
app.value('useValue','<li><b>To show/use the stored values it´s possible to use an injection, for example inside the run()-Method</b></li>');
app.value('valuesInRun','<li><code>app.run( function(app2Headline){<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;$(\"#showSomewhere\").append(app2Headline);<br />&nbsp; &nbsp;&nbsp;});</code><br /> </li>');
app.value('overwriteValues','<li><b>It´s also possible to overwrite a stored \"value()\". This can be done by a new declaration</b></li>');

app.constant('CONSTANTS_HEADLINE', '<h3>The .constants()-Method</h3>');
app.constant('CONSTANTS_IN_ACTION', '<li><b>Similar to .value()-Method it´s also possible storing Constants with the .constant()-Method</b></li>');
app.constant('CONSTANTS_METHOD','<li><b>The same procedure as .value(). But later not overwriteable. </b></li>');
app.constant('CONST_DEPENDENCY','<li><code>app.constant("CONSTANTS_IN_ACTION","Storing a FINAL value");</code></li>');
app.constant('CONVENTION','<li><b>NamingConvention: Constants should name in UPPER_CASE notation </b></li>');

// 3. Config the config()-Method

// 4. Run the run()-Method
app.run( function(app2Headline, ValueInAction,ValueMethod, dependency,useValue, valuesInRun, overwriteValues, 
                    CONSTANTS_HEADLINE,CONSTANTS_IN_ACTION,CONSTANTS_METHOD, CONST_DEPENDENCY, CONVENTION){
    $('body').append("<script>alert('"+app2Headline+"');</script>");
    $('#showHead').append(app2Headline);    
    alert(ValueInAction);
    $('#show1').prepend(ValueInAction);
    $('#showInner1').append(ValueMethod);
    $('#showInner1').append(dependency);
    $('#showInner1').append(useValue);
    $('#showInner1').append(valuesInRun); 
    $('#showInner1').append(overwriteValues);
    $('#showInner1').append(dependency);
    $('body').append("<script>alert('"+CONSTANTS_HEADLINE+"');</script>");
    $('#show2').prepend(CONSTANTS_HEADLINE);
    $('#showInner2').append(CONSTANTS_IN_ACTION);
    $('body').append("<script>alert('Zeig mir mehr');</script>");
    $('#showInner2').append(CONSTANTS_METHOD);
    $('#showInner2').append(CONST_DEPENDENCY);
    $('#showInner2').append(CONVENTION);
});
