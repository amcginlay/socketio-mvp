// inspired by https://github.com/socketio/socket.io/tree/master/examples/chat
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    // [2 of 3] server reflects data back to ALL clients (see client.js)
    io.emit('message', data); // NOTE socket.broadcast.emit() bypasses the sending client
  });
});