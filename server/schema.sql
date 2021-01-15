
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  ID INT AUTO_INCREMENT NOT NULL,
  username varchar(50),
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  ID INT AUTO_INCREMENT NOT NULL,
  roomname varchar(50),
  messageText varchar(50),
  user_ID INT,
  PRIMARY KEY (ID), 
  FOREIGN KEY (user_ID) REFERENCES users(ID)
);



/* Create other tables and define schemas for them here! */





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- select * from users inner join messages on users.id = messages.user_ID;
-- insert into messages (roomname, messageText, user_ID) values ('lobby', 'Hello World', 2)
-- insert into users (username) values ('Tai');