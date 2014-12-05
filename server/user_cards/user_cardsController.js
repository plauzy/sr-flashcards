var db = require('../db');
var url = require('url')


module.exports = {
    getCardsForReview : function(req, res, next) {
    var user_id;
    var url = req._parsedOriginalUrl.path;
    console.log("below htis is the real url")
    var split  = url.split("/api/users/");
    user_id = split.join('').split('/reviews')[0]

    var date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' +
            ('00' + date.getUTCHours()+6).slice(-2) + ':' +
            ('00' + date.getUTCMinutes()).slice(-2) + ':' +
            ('00' + date.getUTCSeconds()).slice(-2);

    db.orm.query("SELECT cards.* FROM cards WHERE cards.id IN ( SELECT user_cards.card_id FROM user_cards WHERE user_cards.user_id = 2 and display_at < now());").success(function(cards) {
      console.log(cards)
      res.json(cards)
    });




    }
};