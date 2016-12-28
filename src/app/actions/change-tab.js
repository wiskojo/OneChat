import {CHANGE_TAB} from "../constants/action-types";


export const changeTab = function(tab)
{
  return {
    type: CHANGE_TAB,
    payload: tab
  };
}
