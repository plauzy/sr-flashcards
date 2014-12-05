angular.module('myApp.reviews', [])
.controller('DecksController', function($scope, $http, $routeParams, Decks){

  $scope.decklist = Decks.getAllDecks().$$state;
  // console.log(Decks.getAllDecks());
  // console.log(Decks.getAllDecks().$$state);

  $scope.allDeckCards = Decks.getAllDeckCards($routeParams.id).$$state;
  console.log("I'm here");
  console.log(Decks.getAllDeckCards($routeParams.id).$$state);

    // $scope.reviewCount = Decks.reviewCount($scope.userId);

  $scope.reviewlist = Decks.getReviews($scope.userId);
  console.log("reviewlist: ", reviewlist);


});