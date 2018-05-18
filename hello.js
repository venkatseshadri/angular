var testApp = angular.module('testApp', []);

testApp.controller('testController' , function ($scope, $http) {
    $scope.home = "This is the homepage";
    
    $scope.getRequest = function () {
        console.log("I've been pressed!");  
        $http.get("http://localhost:8080/myApp/util")
            .then(function successCallback(response){
                $scope.response = response;
                $scope.lastName = response.data._lastName;
                $scope.firstName = response.data._firstName;
                console.log(response.data._lastName);
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
    };
    
});