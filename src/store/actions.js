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
const getHotMusicAction = (songs,banners) => {
  console.log("hotMusics--actiondata", banners);
  return {
    type: GET_HOT_MUSIC,
    hotMusics: [...songs],
    banners:[...banners],
  }
}
export const  getUserList =  () => {
  return (dispatch) => {
    return axios.get('https://reqres.in/api/users').then(res => {
      console.log("res", res.data.data);
      dispatch(changeUserList(res.data.data));
    })
  }
};
export const getHotMusic = () => {
  console.log("aaaa");
  return async (dispatch) => {
    const bannerInfo = await fetch.get('/banner?type=2');
    const fetechInfo = await fetch.get('/personalized/newsong');
    // console.log("getHotMusic--get data", fetechInfo.data.result.length);
    // console.log("banners", bannerInfo?.data?.banners);
    if (fetechInfo?.data?.result && bannerInfo?.data?.banners) {
      dispatch(getHotMusicAction(fetechInfo?.data?.result,bannerInfo?.data?.banners));
    }
    
  }
  
}