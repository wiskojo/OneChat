import {LOGIN} from "../constants/action-types";


export const login = function(userProfile)
{
  return {
    type: LOGIN,
    payload: userProfile
  };
}
