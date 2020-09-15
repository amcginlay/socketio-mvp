$(function() {
  var $window = $(window);
  var socket = io();

  $window.keydown(event => {
    // [1 of 3] keypresses in the browser are sent to the server (see server.js)
    socket.emit('message', event.key);
  });

  socket.on('message', (data) => {
    // [3 of 3] keypresses re-appear in client after round-trip to server
    $('#output').append('<span>' + data + '</span><br>');
  });

});