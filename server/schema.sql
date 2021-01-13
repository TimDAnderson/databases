CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  ID integer AUTO_INCREMENT,
  createdAt VARCHAR(30),
  objectID VARCHAR(30),
  roomname text,
  messageText text,
  updatedAt VARCHAR(30),
  username text,
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

