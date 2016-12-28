import {UPDATE_USER_LIST} from "../constants/action-types";


export const updateUserList = function(userList)
{
  return {
    type: UPDATE_USER_LIST,
    payload: userList
  };
}
