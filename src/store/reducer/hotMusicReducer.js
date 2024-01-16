import { GET_HOT_MUSIC } from '../constans';
const defaultState = {  };
const hotMusicReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_HOT_MUSIC:
      return {
        ...state,
        ...action.hotMusics,
      }
    default:
      return state;
  }
}
export default hotMusicReducer;