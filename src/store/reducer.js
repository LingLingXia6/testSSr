import {combineReducers} from 'redux';
import { CHANGE_USER_LIST } from './constans';
const defaultState = { userList: [] };

export const userReducer =(state = defaultState, action) => {
  console.log("userReducer",action)
  switch (action.type) {
    case CHANGE_USER_LIST:
      return {
        ...state,
        ...action.list
      }
    default:
      return state;
  }
};
 
const  rootReducer = combineReducers({ user: userReducer });
export default rootReducer;