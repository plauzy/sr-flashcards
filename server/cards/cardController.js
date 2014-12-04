var db = require('../db');


module.exports = {
  allCards: function (req, res, next) {
    db.Card.findAll()
      .complete(function(err, results){
        res.json(results);
      });
  },

  updateUserCards: function (req, res, next) {
    var card = req.body;

    db.User_cards
      .findOrCreate({ card_id: card.id }, { user_id : card.user_id })
      .success(function(user_card, created) {
        console.log(user_card.values)
        console.log(created)
        user_card.times_viewed +=1;
        user_card.save().success(function() {"Times Viewed updated"})

        /*
          {
            username: 'sdepold',
            job: 'Technical Lead JavaScript',
            id: 1,
            createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
            updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
          }
          created: true
        */
        res.send(200);
      })




  }
};