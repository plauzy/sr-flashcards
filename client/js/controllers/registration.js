angular.module('myApp.registration', [])

.controller('RegistrationController', function ($rootScope, $scope, $window, $location, Auth) {
  $scope.user = {};

  $rootScope.loggedIn = function() {
    return Auth.isAuth();
  };

  $rootScope.logout = function() {
    Auth.signout();
  };

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.sr-flashcards', token);
        $location.path('/decks');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.sr-flashcards', token);
        $location.path('/decks');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
