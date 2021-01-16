var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages 
      models.get();
      //console.log(req);

      //app /classes
      //routes /messages
      //controller/index get request
      //hold off and send to model
      //model is going to read from the database
      //model will send information back to controller?
      //controller will add information to response object and send back to client (http)



      // res.status(200).send('THIS IS OUR GET MESSAGE');
      // res.send('')
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
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

