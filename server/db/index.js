var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

var User = db.define('users', {
  username: Sequelize.STRING,
}, {timestamps: false});

var Message = db.define('messages', {
  messageText: Sequelize.STRING,
  roomname: Sequelize.STRING,
  userId: Sequelize.INTEGER
}, {timestamps: false});

Message.belongsTo(User);
User.hasMany(Message);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;


//orig mysql
// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".


// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'chat'
// });

// connection.connect();

// module.exports = connection;