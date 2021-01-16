const connection = require('../db');
var db = require('../db');

//var mysql = require('mysql');




module.exports = {
  messages: {
    get: function (cb) { // a function which produces all the messages

      db.query('select username, roomname, messageText from users inner join messages on users.id = messages.user_ID', (error, results, fields)=>{
        if (error) {
          throw error;
        } else {
          messageArray = [];
          for (var i = 0; i < results.length; i++) {
            messageArray.push({
              username: results[i].username,
              roomname: results[i].roomname,
              message: results[i].messageText
            });
          }
          // console.log(messageArray);

          cb(messageArray);
        }
      });

      //we have to pass the assembled message array of all message objects into this callback
   
      // {
      //   "username": "Tim",
      //   "roomname": "lobby",
      //   "message": "this should be ID 2"
      //   }


    },
    post: function (messageObject, cb) { // a function which can be used to insert a message into the database
      
      db.query(`insert ignore into users (username) values ('${messageObject.username}')`, (error, results, fields)=>{
        if (error) {
          throw error;
        } else {
          db.query(`select ID from users where username = '${messageObject.username}'`, (error, results, fields)=>{
            if (error) {
              throw error;
            } else {
              // console.log(results[0].ID);
              let userID = results[0].ID;
              db.query(`insert into messages (roomname, messageText, user_ID) values ('${messageObject.roomname}', '${messageObject.message}', '${userID}')`, (error, results, fields)=>{
                if (error) {
                  throw error;
                } else {
                  cb();
                        
                }
              });
            }
          });
        }
              
      });
          
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (usernameObject, cb) {
      db.query(`insert ignore into users (username) values ('${usernameObject.username}')`, (error, results, fields) => {
        if (error) {
          throw error;
        } else {
          console.log(results);
          cb();
        }
      });
    }
  }
  
};