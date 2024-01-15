import axios from 'axios';
import { CHANGE_USER_LIST } from './constans';

const changeUserList = (list) => {
  return {
    type: CHANGE_USER_LIST,
    list 
  }
}
export const getUserList = (dispatch) => {
  return () => {
    axios.get('https://reqres.in/api/users').then(res => {
      console.log("res", res);
      dispatch(changeUserList(res.data.data));
    })
  }
}