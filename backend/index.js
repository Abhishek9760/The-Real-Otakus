const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

const server = require('http').createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

io.on('connection', socket => {
  let roomName;
  console.log('connected');
  socket.emit('connected');
  socket.on('join-room', roomCode => {
    roomName = roomCode;
    socket.join(roomCode);
    // socket.to(roomCode).emit('get-data');
  });

  socket.on('user-typing', name =>
    socket.to(roomName).emit('show-typing', name),
  );

  socket.on('stop-typing', () => socket.to(roomName).emit('hide-typing'));

  socket.on('disconnect', () => {
    socket.leave(roomName);
    io.in(roomName).emit('updated-users-count', updateUsersInRoom(roomName));
  });

  socket.on('get-users-count', () => {
    const members = updateUsersInRoom(roomName);
    io.in(roomName).emit('updated-users-count', members);
  });

  socket.on('send-message', message => {
    socket.broadcast.to(roomName).emit('new-message', message);
    console.log('recieved to server');
  });

  socket.on('get-history', callback => {
    socket.to(roomName).emit('load-old-chat');
    callback();
  });

  socket.on('show-loader', () => socket.to(roomName).emit('set-loader'));
});

const updateUsersInRoom = roomName => {
  if (!io.sockets.adapter.rooms.get(roomName)) {
    return 0;
  }
  return io.sockets.adapter.rooms.get(roomName).size;
  // return io.adapter.rooms.get(roomName).size;
};

server.listen(PORT);
