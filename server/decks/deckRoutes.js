var deckController = require('./deckController.js');

module.exports = function (app) {
  // app === linkRouter injected from middleware.js

  // app.param will hijack any request with a 'code' parameter on in
  // like line 16 below. That code will actually be the shortned url
  // so the real URL will be pre fetched from mongo and attached to
  // req.navLink before it reaches line 16.
  // app.param('code', markerController.findUrl);

  app.route('/:id')
    .get(deckController.cardsInDeck);

  app.route('/')
    .get(deckController.allDecks);
    // .post(deckController.updateDecks);

};