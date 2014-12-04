CREATE DATABASE flashcards;

USE flashcards;

CREATE TABLE decks (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20),
  PRIMARY KEY (ID)
);

CREATE TABLE cards (
  id int NOT NULL AUTO_INCREMENT,
  question varchar(200) NOT NULL,
  answer varchar(200),
  deck_id int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE user_cards (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  card_id int NOT NULL,
  display_at Date,
  times_viewed int,
  last_time_to_answer int,
  avg_time_to_answer int,
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(40) NOT NULL,
  password varchar(40) NOT NULL,
  PRIMARY KEY (id)
)

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

