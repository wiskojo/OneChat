const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);

const port = process.env.PORT || 3001;

http.listen(port, function()
{
  console.log('Listening on: ' + port);
});

io.on("connection", function(socket)
{
  // --------------- TEMPORARY INITCONNECT IMPLEMENTATION -------------------
  socket.on("initConnect", function(userData)
  {
    socket.user = userData.user;
    socket.room = userData.tab.url;

    socket.join(socket.room);
    console.log("Socket connected: " + socket.user + " in room " + socket.room);

    socket.emit("updateRoom", socket.room);
    updateUserList(socket.room);
  });
  // ------------------------------------------------------------------------

  socket.on("disconnect", function()
  {
    // Update the userlist of every client in the socket's room pre-disconnect
    updateUserList(socket.room);
    console.log("socket disconnected: " + socket.user + " from room " + socket.room);
  });

  socket.on("message", function(message)
  {
    // Don't broadcast empty messages
    if(message !== "")
    {
      // Emit message from socket to every client in the socket's
      // room(including the socket itself)
      io.to(socket.room).emit("message", {user: socket.user, text: message});
      console.log("Message by " + socket.user + " in room "
        + socket.room + ": " + message);
    }
  });

  socket.on("changeTab", function(tab)
  {
    var prevRoom = socket.room;

    // Socket popped from current room and pushed into new room
    socket.leave(socket.room);
    socket.room = tab !== undefined ? tab.url : "/";
    socket.join(socket.room);

    // Room update event emitted to socket to update its state.room
    socket.emit("updateRoom", socket.room);
    console.log("Room update of socket " + socket.user + " to " + socket.room);
    // Update userlist event fired to clients in the socket's
    // previous and current room
    updateUserList(prevRoom);
    updateUserList(socket.room);
  });
});

// TODO Find a more efficient implementation of updating the users' lists of
// other users in their room
function updateUserList(room)
{
  if(!(room == null || io.sockets.adapter.rooms[room] == null))
  {
    // Create an array of all socket IDs in room
    var socketIds = Object.keys(io.sockets.adapter.rooms[room].sockets);
    // Emit userlist-update to room with names of all clients in room
    io.to(room).emit("updateUserList",
      socketIds.map((socketId) =>
    {
      return io.sockets.connected[socketId].user;
    }));
  }
}
