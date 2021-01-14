var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  //this takes in the big array
  render: function(data) {
    //delegates single messages to renderMessage



    var resultsArray = data.results;
    //iterate over the resultsArray
    for (var i = 0; i < resultsArray.length; i++) {
      MessagesView.renderMessage(resultsArray[i]);
    }
  },

  // var message = {
  //   username: 'Mel Brooks',
  //   text: 'It\'s good to be the king',
  //   roomname: 'lobby'
  // };

  renderMessage: function(message) {
    //console.log(message.username);
    message.username = message.username || 'anonymous';
    message.text = message.text || '';
    //message.roomname = 'lobby';
    var htmlText = MessageView.render(message);
    //console.log(htmlText);

    //append this to id chats
    MessagesView.$chats.append(htmlText);
  }

};