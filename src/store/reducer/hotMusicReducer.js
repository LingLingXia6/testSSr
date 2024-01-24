import { GET_HOT_MUSIC } from '../constans';
const defaultState = {  };
const hotMusicReducer = (state = defaultState, action) => {
  console.log("hotMusicReducer",Array.isArray(action.hotMusics) )
  switch (action.type) {
    case GET_HOT_MUSIC:
      return {
        ...state,
        hotMusics: action.hotMusics,
        banners:action.banners,
      }
    default:
      return state;
  }
}
export default hotMusicReducer;