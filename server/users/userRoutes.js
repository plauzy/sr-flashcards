var userController = require('./userController.js');
var user_cardsController = require('../user_cards/user_cardsController.js')

module.exports = function (app) {
  // app === userRouter injected from middlware.js
  app.route('/:id/reviews')
    .get(user_cardsController.getCardsForReview);


  app.post('/signin', userController.signin);
  app.post('/signup', userController.signup);
  app.get('/signedin', userController.checkAuth);
};
