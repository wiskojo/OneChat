import {CHANGE_TAB} from "../actions/action-types";


export const changeTab = function(tab)
{
  return {
    type: CHANGE_TAB,
    payload: tab
  };
}
