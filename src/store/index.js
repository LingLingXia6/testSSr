import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'

const reducer = (state = { name: 'Lion' }, action) => {
  return state;
}

const getStore = () => {
  // thunk用来解决异步问题
  const middleware=applyMiddleware(thunk)
  return createStore(reducer,middleware );
}

export default getStore;
