(function(){
    'use strict';

    angular.module('myFirstApp', [])

    .controller('MyFirstController', function($scope){
        $scope.name = "nh";
        $scope.sayHello = function(){
            return "hello world~";
        };
    });


})();