angular.module('myApp.services', [])

.factory('Decks', function($http){
  var getAllDecks = function() {
    return $http({
      method: 'GET',
      url: '/api/decks'
    })
    .then(function(resp) {
      return resp.data
    });
  };

    var getAllDeckCards = function(id) {
    return $http({
      method: 'GET',
      url: '/api/decks/' + id
    })
    .then(function(resp) {
      return resp.data;
    });
  };

   var getReviews = function(userid) {
    // console.log('userid:', userid);
    var url = '/api/users/' + userid + '/reviews';
    console.log("url: ", url);
    return $http({
      method: 'GET',
      url: url
    })
    .then(function(resp) {
      // console.log("inside: ", resp.data);
      return resp.data;
    });
  };

   var reviewCount = function(userid) {
    var url = '/api/users/' + userid + '/reviews';
    return $http({
      method: 'GET',
      url: url
    })
    .then(function(resp) {
      // console.log(resp.data.length);
      return resp.data.length;
    });
  };

  var postCardToReviews = function(id, user) {
    var url = '/api/cards/' + id + '/users/' + user;
    return $http({
      method: 'POST',
      url: url
    })
    .then(function(resp) {
      // console.log(resp.data);
      return resp.data;
    });
  };
  return {
    getAllDecks: getAllDecks,
    getAllDeckCards: getAllDeckCards,
    postCardToReviews: postCardToReviews,
    reviewCount: reviewCount,
    getReviews: getReviews
  };
})

.factory('Cards', function ($http) {
  // var addLink  = function(link) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/links',
  //     data: link
  //   });
  // };

  var getAllCards = function() {
    return $http({
      method: 'GET',
      url: '/api/cards'
    })
    .then(function(resp) {
      return resp.data
    });
  };

  return {
    getAllCards: getAllCards
  };
})
.factory('Auth', function ($http, $location, $window, $rootScope) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      $window.localStorage.setItem('com.sr-flashcards.user_id', resp.data.user_id);
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      $window.localStorage.setItem('com.sr-flashcards.user_id', resp.data.user_id);
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.sr-flashcards');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.sr-flashcards');
    $window.localStorage.removeItem('com.sr-flashcards.user_id');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
