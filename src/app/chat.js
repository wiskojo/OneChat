import * as actions from "./actions/action-types";
import {receiveMessage} from "./actions/message-actions";
import {updateUserList} from "./actions/update-user-list";
import {updateRoom} from "./actions/update-room";
import io from "socket.io-client";

const socket = null;

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
  socket = io.connect();

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
}
