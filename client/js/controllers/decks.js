angular.module('myApp.decks', [])
.controller('DecksController', function($scope, $http, Decks){

  $scope.decklist = Decks.getAllDecks().$$state;
  // console.log(Decks.getAllDecks());
  // console.log(Decks.getAllDecks().$$state);

});