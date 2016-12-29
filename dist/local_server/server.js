const express = require('express');
const app  = express();
const http = require('http').Server(app);
const io   = require('socket.io')(http);

const port = 3002;

var client = null,
    extension = null;

http.listen(port, function()
{
  console.log('Listening on: ' + port);
})

io.on("connection", function(socket)
{
  // Assign connected client to either the client or extension var depending
  // on handshake type data
  if(socket.handshake.query["type"] === "client")
  {
    client = socket;
    console.log("Client connected to local server")
  }
  else if(socket.handshake.query["type"] === "extension")
  {
    extension = socket;
    console.log("Extension connected to local server")
  }

  // Routes extension-ready event to client from extension
  socket.on("extensionConnect", function(tab)
  {
    (function waitForClient()
    {
      if(client !== null)
      {
        client.emit("extensionConnect", tab);
      }
      else
      {
        setTimeout(waitForClient, 1000);
      }
    })();
  });

  // Route tab-change event to client from extension
  socket.on("tabChange", function(tab)
  {
    if(client !== null)
    {
      client.emit("tabChange", tab);
      console.log("Tab changed to: " + tab.url);
    }
  });

  // Assigns null to client or extension var on disconnect of socket
  // of appropriate type
  socket.on("disconnect", function()
  {
    if(socket === client)
    {
      client = null;
      console.log("Client disconnected from local server")
    }
    else if(socket === extension)
    {
      extension = null;
      console.log("Extension disconnected from local server")
    }
  });
});
