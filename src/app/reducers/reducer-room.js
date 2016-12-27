import {UPDATE_ROOM} from "../actions/action-types";


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
