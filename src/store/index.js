import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'
import rootReducer from './reducer/index';

const getStore = () => {
  // thunk用来解决异步问题
  const middleware=applyMiddleware(thunk)
  return createStore(rootReducer,middleware );
}

export default getStore;
