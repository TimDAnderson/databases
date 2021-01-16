const connection = require('../db');
var db = require('../db');
//var mysql = require('mysql');

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      //this is going to be the sql read from database section

      //db.connect();

      db.query('select * from users');

      db.end();





    },
    post: function (messageObject, cb) { // a function which can be used to insert a message into the database
      
      //the post is going to have to do two writes to the database
      //insert ignore username into users table
      //query for ID out of users table
      //insert message into messages table

      //console.log(db.prototype);

      // db.connect();
      db.query(`insert ignore into users (username) values ('${messageObject.username}')`, (error, results, fields)=>{
        if (error) {
          throw error;
        } else {
          // console.log('THIS IS RESULTS::::::  ' + JSON.stringify(results));
          //console.log(`THIS IS FIELDS::::::: ${JSON.Stringify(fields)}`);
          db.query(`select ID from users where username = '${messageObject.username}'`, (error, results, fields)=>{
            if (error) {
              throw error;
            } else {
              console.log(results[0].ID);
              let userID = results[0].ID;
              db.query(`insert into messages (roomname, messageText, user_ID) values ('${messageObject.roomname}', '${messageObject.message}', '${userID}')`, (error, results, fields)=>{
                if (error) {
                  throw error;
                } else {
                  console.log(results);
                }
              });
            }
          });
        }
        
      });


      // db.query(`insert into users (username) values ('${messageObject.username}')` );

      //db.end();
      cb();
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

