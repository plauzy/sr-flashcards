var db = require('../db');


module.exports = {
  allDecks: function (req, res, next) {
    db.Deck.findAll()
      .complete(function(err, results){
        // console.log(results);
        res.json(results);
      });
  },

  cardsInDeck: function(req, res, next) {
    var url = req._parsedOriginalUrl.pathname
    var deck_id = url.split("/api/decks/")[1]

    db.Card.findAll({ where : {deck_id : deck_id} }).success(function(cards) {
      // console.log(cards)
      res.json(cards);
    });
  }
}
