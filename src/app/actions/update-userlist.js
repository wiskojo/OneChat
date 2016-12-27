import {UPDATE_USER_LIST} from "../actions/action-types";


export const updateUserList = function(userList)
{
  return {
    type: UPDATE_USER_LIST,
    payload: userList
  };
}
