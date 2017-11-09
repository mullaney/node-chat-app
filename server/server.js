const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'carrie@example.com',
    text: 'Hey. what is going on?',
    createdAt: 123
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.emit('newMessage', {
    from: 'Harold',
    text: 'I eat everything',
    createdAt: new Date
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
    newMessage.createdAt = new Date;
    socket.emit('newMessage', newMessage);
  })

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
