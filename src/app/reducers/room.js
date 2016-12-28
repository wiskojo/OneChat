import {UPDATE_ROOM} from "../constants/action-types";


const initialState = "/";
export default function(state = initialState, action)
{
  switch(action.type)
  {
    case UPDATE_ROOM:
      return action.payload;
      break;
  }
  return state;
}
