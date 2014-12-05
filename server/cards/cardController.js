var db = require('../db');



module.exports = {
  allCards: function (req, res, next) {
    // console.log(url.parse(req.body))
    db.Card.findAll()
      .complete(function(err, results){
        if (err) throw err;
        res.json(results);
      });
  },

 updateUserCards: function(req, res, next) {
    var url = req.originalUrl;
    var temp = url.split("/users/");
    var user_id = temp.pop();
    console.log("user_id: ", user_id);
    var card_id = temp.join('').split("/api/cards/")[1]

    db.User_cards
      .findOrCreate( {where: { card_id: card_id, user_id : user_id } })
      .success(function(user_card, created) {
        user_card.times_viewed +=1;
        user_card.save().success(function() {"Times Viewed updated"})
        // console.log(user_card.values)
        // console.log(created)
        res.send(200);
      })
    }



};