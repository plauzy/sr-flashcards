angular.module('myApp.registration', [])

.controller('RegistrationController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.loggedIn = function() {
    return Auth.isAuth();
  };

  $scope.logout = function() {
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
