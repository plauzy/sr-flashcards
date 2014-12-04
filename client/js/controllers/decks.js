angular.module('myApp.decks', [])
.controller('DecksController', function($scope, $http){

   $scope.decklist = $http({
      method: 'GET',
      url: '/api/decks'
    })
    .then(function(resp) {
      console.log(resp.data);
      return resp.data
    });

});