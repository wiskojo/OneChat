import {RECEIVE_MESSAGE, SEND_MESSAGE} from "./action-types";


export const sendMessage = function(message)
{
  return {
    type: SEND_MESSAGE,
    payload: message
  };
}

export const receiveMessage = function(message)
{
  return {
    type: RECEIVE_MESSAGE,
    payload: message
  }
}
