angular.module('myApp.registration', [])

.controller('RegistrationController', function ($scope, $window, $location, Auth, Decks) {
  $scope.user = {};

  $scope.userId = window.localStorage.getItem('com.sr-flashcards.user_id');

  $scope.reviewCount = function($scope.userId) {
    var reviews = Decks.getReviews($scope.userId).$$state;
    console.log(reviews);
  };

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
