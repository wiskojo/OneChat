import {UPDATE_ROOM} from "../constants/action-types";


export const updateRoom = function(room)
{
  return {
    type: UPDATE_ROOM,
    payload: room
  };
}
