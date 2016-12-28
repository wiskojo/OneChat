import {
  RECEIVE_MESSAGE,
  SEND_MESSAGE,
  UPDATE_ROOM
} from "../actions/action-types";


const initialState = []

export default function(state = initialState, action)
{
  switch(action.type)
  {
    // case SEND_MESSAGE:
    case RECEIVE_MESSAGE:
      return state.concat([action.payload]);
      break;

    case UPDATE_ROOM:
      return initialState;
      break;
  }
  return state;
}
