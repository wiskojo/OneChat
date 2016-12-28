import io from "socket.io-client";
import connectExtension from "./local_server";

import * as actions from "./constants/action-types";
import {receiveMessage} from "./actions/message-actions";
import {updateUserList} from "./actions/update-user-list";
import {login} from "./actions/login";
import {updateRoom} from "./actions/update-room";
import {changeTab} from "./actions/change-tab";


var socket      = null;
var extension   = null;

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
  extension = connectExtension(io);

  extension.on("extensionConnect", function(tab)
  {
    // TODO Don't forget to change this to an environment variable
    socket = io.connect("http://localhost:3001");

    // TEMPORARY TEMPORARY TEMPORARY TEMPORARY TEMPORARY TEMPORARY
    socket.on("connect", function()
    {
      socket.emit("initConnect", {
        user: "Anon" + Math.floor(Math.random() * 10000),
        tab: tab
      });
    });

    /* Bind global socket event handlers */

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
  });

  extension.on("tabChange", function(tab)
  {
    store.dispatch(changeTab(tab));
  });
}
