CREATE DATABASE flashcards;

USE flashcards;

CREATE TABLE decks (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20),
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

CREATE TABLE cards (
  id int NOT NULL AUTO_INCREMENT,
  question varchar(200) NOT NULL,
  answer varchar(200),
  deck_id int NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

CREATE TABLE user_cards (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  card_id int NOT NULL,
  display_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  times_viewed int,
  last_time_to_answer int,
  avg_time_to_answer int,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(40) NOT NULL,
  password varchar(40) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
-- insert into users (username, password) values ('bob@mail.com', 'test');
-- insert into decks (name) values ('german');
-- insert into decks (name) values ('japanese');
-- insert into decks (name) values ('french');
-- insert into cards (question, answer, deck_id) values ('これ', 'this', 2);
-- insert into cards (question, answer, deck_id) values ('いぬ', 'dog', 2);
-- insert into user_cards (user_id, card_id, times_viewed) values (1, 1, 0);
-- insert into user_cards (user_id, card_id, times_viewed) values (1, 2, 0);

