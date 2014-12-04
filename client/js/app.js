var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    })
    .when('/decks', {
      templateUrl: 'views/decks.html',
      controller: 'DecksController'
    })
    .when('/reviews', {
      templateUrl: 'views/reviews.html'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);