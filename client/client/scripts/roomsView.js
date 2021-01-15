var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  //this is what happens when you select a room from the dropdown
  initialize: function() {
    //this somehow needs to only grab the message objects with matching roomname and then pass off to messagesview for re-render
    RoomsView.$select.on('select', RoomsView.roomSelection);
  },

  render: function(data) {
    //iterate through all of the array
    var array = data.results;
    var roomSet = new Set();
    for (var i = 0; i < array.length; i++) {
      //add the unique room names to the set
      roomSet.add(array[i].roomname);
    }
    console.log(roomSet);
      //iterate over the set and send those off to roomsView.renderRoom
      for (var room of roomSet) {
        console.log(room);
        var myObj = {'room': room};
        RoomsView.renderRoom(myObj);
      }

  },

  renderRoom: function (roomObj) {
    console.log(RoomView.render);
    var htmlText = RoomView.render(roomObj);

    //append to the select options dropdown
    RoomsView.$select.append(htmlText);
  },

  roomSelection: function (event) {

  }

};
