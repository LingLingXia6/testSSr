import axios from 'axios';
import { CHANGE_USER_LIST,GET_HOT_MUSIC } from './constans';
import fetch from '../fetcher.js';

const changeUserList = (list) => {
  console.log("list000", list);
  return {
    type: CHANGE_USER_LIST,
    list 
  }
}
const getHotMusicAction = (hotMusics) => {
  return {
    type: GET_HOT_MUSIC,
    hotMusics,
  }
}
export const getUserList = () => {
  return (dispatch) => {
    return axios.get('https://reqres.in/api/users').then(res => {
      console.log("res", res.data.data);
      dispatch(changeUserList(res.data.data));
    })
  }
};
export const getHotMusic = () => {
  return (dispatch) => {
    return fetch.get('/top/playlist?limit=8&order=hot').then(res => {
      console.log("music---data--", res.data.playlists);
      dispatch(getHotMusicAction(res.data.playlists));
    })
  }
  
}