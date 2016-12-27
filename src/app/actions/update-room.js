import {UPDATE_ROOM} from "../actions/action-types";


export const updateRoom = function(room)
{
  return {
    type: UPDATE_ROOM,
    payload: room
  };
}
