import {LOGIN} from "../actions/action-types";


const initialState = {
  name: ""
};

export default function(state = initialState, action)
{
  switch(action.type)
  {
    case LOGIN:
      return Object.assign({}, state, action.payload);
      break;
  }
  return state;
}
