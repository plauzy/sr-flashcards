var cardController = require('./cardController.js');

module.exports = function (app) {
  // app === linkRouter injected from middleware.js

  // app.param will hijack any request with a 'code' parameter on in
  // like line 16 below. That code will actually be the shortned url
  // so the real URL will be pre fetched from mongo and attached to
  // req.navLink before it reaches line 16.
  // app.param('code', markerController.findUrl);

  app.route('/')
    .get(cardController.allCards);

  app.route('/:id/users/:id')
    .post(cardController.updateUserCards);

};
