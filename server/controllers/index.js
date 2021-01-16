const { Message } = require('../db');
var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages 
      //working code
      models.messages.get((messageArray)=>{
        // console.log(messageArray);
        res.send(messageArray);
      });


      //orm attempt
      // Message.findAll({ include: [User]})
      //   .complete(function(err, results) {
      //     res.json(results);
      //   });


    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      //we should console.log the request object
      //this going to have the message, username, room
      //kick off an async thing to the SQL database to write 
      console.log(req.body);
      //req.body is an object with the following keys
      //username, roomname, message

      //send req.body to model
      models.messages.post(req.body, ()=>{
        res.send('message recieved');
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      models.users.post(req.body, ()=>{
        res.send('user posted');
      });
    }
  }
};

