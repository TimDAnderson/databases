var db = require('../db');


module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      //this is going to be the sql read from database section

      db.connect();

      db.query('select * from users');

      db.end();





    },
    post: function (messageObject, cb) { // a function which can be used to insert a message into the database
      
      //the post is going to have to do two writes to the database
      //1: if username doesnt exist in user table
      //2: write to user table inside of data base <- This adds a new user!

      //3: if message is defined in messageObject
      //4: query user table to get ID for username
      //5: once we know the user ID we can use it to write to message table our user_ID

      db.connect();
      db.query(`select username from users where users = '${messageObject.username}`, (error, results, fields)=>{
        if (error) {
          throw error;
        } else {
          console.log();
        }
        
      });


      // db.query(`insert into users (username) values ('${messageObject.username}')` );

      db.end();
      cb();
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

