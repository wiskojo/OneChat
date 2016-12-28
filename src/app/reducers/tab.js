import {CHANGE_TAB} from "../constants/action-types";


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
