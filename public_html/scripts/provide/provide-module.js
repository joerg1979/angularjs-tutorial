var providerDemo = angular.module('providerDemo',[]);
    
providerDemo.config( function ( $provide ){
    $provide.value('pro1','Wert in pro1');
    $provide.value('pro2','Wert in pro2');            
});

providerDemo.run( function ( pro1, pro2){
    
});

