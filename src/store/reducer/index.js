import { combineReducers } from 'redux';
import hotMusicReducer from './hotMusicReducer';
const rootReducer = combineReducers({ hotMusic: hotMusicReducer });
export default rootReducer;