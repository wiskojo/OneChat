import {combineReducers} from "redux";
import UsersReducer from "./users";
import UserProfileReducer from "./user-profile";
import MessagesReducer from "./messages";
import RoomReducer from "./room";


const allReducers = combineReducers({
  users: UsersReducer,
  userProfile: UserProfileReducer,
  messages: MessagesReducer,
  room: RoomReducer
});

export default allReducers;
