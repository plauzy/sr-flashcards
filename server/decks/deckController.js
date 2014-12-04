var db = require('../db');


module.exports = {
  allDecks: function (req, res, next) {
    db.Deck.findAll()
      .complete(function(err, results){
        // console.log(results);
        res.json(results);
      });
  }
}
