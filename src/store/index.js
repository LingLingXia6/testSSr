import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'

import hotMusicReducer from './reducer/hotMusicReducer';
const getStore = (preloadedState) => {
  // console.log("preloadedState--getStore",preloadedState);
  // thunk用来解决异步问题
  const middleware = applyMiddleware(thunk);
  return createStore(hotMusicReducer, preloadedState,middleware);
}

export const getClientStore = () => {
  return createStore(hotMusicReducer, window.__PRELOADED_STATE__);
}
 
export default getStore;
