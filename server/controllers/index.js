const { Message } = require('../db');
var models = require('../models');
  

//orm refactor
var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages 
      
      db.Message.findAll({include: [db.User]})
        .then(function(messages) {
          res.json(messages);
        });
      
      
      
      //orig/working code
      // models.messages.get((messageArray)=>{
      //   // console.log(messageArray);
      //   res.send(messageArray);
      // });



    }, 
    post: function (req, res) { // a function which handles posting a message to the database

      db.User.findOrCreate({where: {username: req.body.username}})
        // findOrCreate returns multiple resutls in an array
        // use spread to assign the array to function arguments
        .spread(function(user, created) {
          db.Message.create({
            userId: user.get('id'),
            messageText: req.body.message,
            roomname: req.body.roomname
          }).then(function(message) {
            res.sendStatus(201);
          });
        });



      //orig/working code
      // models.messages.post(req.body, ()=>{
      //   res.send('message recieved');
      // });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      db.User.findAll()
        .then(function(users) {
          res.json(users);
        });

    },
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        // findOrCreate returns multiple resutls in an array
        // use spread to assign the array to function arguments
        .spread(function(user, created) {
          res.sendStatus(created ? 201 : 200);
        });


      // orig mysql code
      // models.users.post(req.body, ()=>{
      //   res.send('user posted');
      // });
    }
  }
};

