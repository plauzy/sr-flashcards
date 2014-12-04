myApp.controller('RegistrationController', function($scope){
   $scope.test = "Patrick";

   $scope.$on('$viewContentLoaded', function(){
    console.log($scope.registrationForm);
    });
   
});