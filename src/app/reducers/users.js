import {UPDATE_USER_LIST} from "../constants/action-types";


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
