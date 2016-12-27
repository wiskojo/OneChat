import {UPDATE_USER_LIST} from "../actions/action-types";


const initialState = [];

export default function(state = initialState, action)
{
  switch(action.type)
  {
    case UPDATE_USER_LIST:
      return action.payload;
      break;
  }
  return state;
}
