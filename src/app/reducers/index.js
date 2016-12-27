import {combineReducers} from "redux";
import UsersReducer from "./reducer-users";
import UserProfileReducer from "./reducer-user-profile";
import MessagesReducer from "./reducer-messages";
import RoomReducer from "./reducer-room";


const allReducers = combineReducers({
  users: UsersReducer,
  userProfile: UserProfileReducer,
  messages: MessagesReducer,
  room: RoomReducer
});

export default allReducers;
