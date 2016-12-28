import io from "socket.io-client";

import * as actions from "./constants/action-types";
import {receiveMessage} from "./actions/message-actions";
import {updateUserList} from "./actions/update-user-list";
import {login} from "./actions/login";
import {updateRoom} from "./actions/update-room";

var socket = null;

export function chatMiddleware(store)
{
  return (next) => (action) =>
  {
    if(socket)
    {
      switch(action.type)
      {
        case actions.SEND_MESSAGE:
          socket.emit("message", action.payload);
          break;

        case actions.CHANGE_TAB:
          socket.emit("changeTab", action.payload);
          break;
      }
    }
    return next(action);
  }
}

export default function(store)
{
  // TODO Don't forget to change this to an environment variable
  socket = io.connect("http://localhost:3001");

  socket.on("message", function(message)
  {
    store.dispatch(receiveMessage(message));
  });

  socket.on("updateUserList", function(userList)
  {
    store.dispatch(updateUserList(userList));
  });

  socket.on("updateRoom", function(room)
  {
    store.dispatch(updateRoom(room));
  });

  socket.on("updateUserList", function(userList)
  {
    store.dispatch(updateUserList(userList));
  });

  // --------- TEMPORARY INITCONNECT IMPLEMENTATION -----------
  store.dispatch(login({name: "NAME"}));
  socket.emit("initConnect", {user: store.getState().userProfile.name, room: "ROOM"});
  // ----------------------------------------------------------
}
