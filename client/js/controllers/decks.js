angular.module('myApp.decks', [])
.controller('DecksController', function($scope, $http, $routeParams, Decks){

  $scope.userId = window.localStorage.getItem('com.sr-flashcards.user_id');
  $scope.decklist = Decks.getAllDecks().$$state;
  // console.log(Decks.getAllDecks());
  // console.log(Decks.getAllDecks().$$state);
  $scope.allDeckCards = Decks.getAllDeckCards($routeParams.id).$$state;

  $scope.addCard = function(id, userId) {
    Decks.postCardToReviews(id, userId);
  }

  //$scope.reviewCount = Decks.getReviews($scope.userId).$$state;

  $scope.reviewlist = Decks.getReviews($scope.userId).$$state;
  // console.log($scope.reviewlist);
  // console.log(Decks.getReviews($scope.userId));
});