import {CHANGE_TAB} from "../actions/action-types";


const initialState = "/";

export default function(state = initialState, action)
{
  switch(action.type)
  {
    case CHANGE_TAB:
      return action.payload;
      break;
  }
  return state;
}
