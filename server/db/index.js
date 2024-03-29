var Sequelize = require('sequelize');
var orm = new Sequelize("flashcards", "root", "");

var Deck = orm.define('Deck', {
  name: Sequelize.STRING
});

var Card = orm.define('Card', {
  question: Sequelize.STRING,
  answer: Sequelize.STRING,
  deck_id: Sequelize.INTEGER
});

var User_cards = orm.define('User_cards', {
  user_id: Sequelize.INTEGER,
  card_id: Sequelize.INTEGER,
  display_at: Sequelize.DATE,
  // interval: {type: Sequelize.INTEGER, defaultValue:???}
  times_viewed: {type: Sequelize.INTEGER, defaultValue:0},
  last_time_to_answer: Sequelize.INTEGER,
  avg_time_to_answer: Sequelize.INTEGER
});

var User = orm.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});


// Deck.hasMany(Card);
// Card.belongsTo(Deck);
// User.hasMany(Card, { through: User_cards });
// Card.hasMany(User, { through: User_cards });



Deck.sync();
Card.sync();
User_cards.sync();
User.sync();


exports.orm = orm;
exports.Deck = Deck;
exports.Card = Card;
exports.User_cards = User_cards;
exports.User = User;