var myApp = angular.module('myApp', [
  'myApp.services',
  'myApp.registration',
  'myApp.decks',
  'ngRoute'

]);


myApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    })
    .when('/decks/:id', {
      templateUrl: 'views/cardview.html',
      authenticate: true,
      controller: 'DecksController'
    })
    .when('/decks', {
      templateUrl: 'views/decks.html',
      authenticate: true,
      controller: 'DecksController'
    })
    .when('/reviews', {
      templateUrl: 'views/reviews.html',
      authenticate: true,
      controller: 'DecksController'
    })
    .otherwise({
      redirectTo: '/login'
    });

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
    $httpProvider.interceptors.push('AttachTokens');
}]);

myApp.factory('AttachTokens', function ($window) {
  // this is an $httpInterceptor
  // its job is to stop all out going request
  // then look in local storage and find the user's token
  // then add it to the header so the server can validate the request
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.sr-flashcards');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
});

myApp.run(function ($rootScope, $location, Auth) {
  // here inside the run phase of angular, our services and controllers
  // have just been registered and our app is ready
  // however, we want to make sure the user is authorized
  // we listen for when angular is trying to change routes
  // when it does change routes, we then look for the token in localstorage
  // and send that token to the server to see if it is a real user or hasn't expired
  // if it's not valid, we then redirect back to signin/signup
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/login');
    }
  });
});