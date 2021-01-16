// var Sequelize = require('sequelize');
// var orm = new Sequelize('chat', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// var User = orm.define('users', {
//   username: Sequelize.STRING,
// });

// var Message = orm.define('messages', {
//   messageText: Sequelize.STRING,
//   roomname: Sequelize.STRING,
// });

// User.hasMany(Message);
// Message.belongsTo(User);

// User.sync();
// Message.sync();

// exports.User = User;
// exports.Message = Message;


//orig mysql
var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

connection.connect();

module.exports = connection;