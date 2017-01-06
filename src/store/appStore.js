import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../reducers/index';
import MashableApiMiddleware from '../middleware/mashableApi';

const reducers = combineReducers(Reducers);
const initialState = {
  stories: {},
};

export default (state = initialState) => {
  const store = createStore(reducers, state, applyMiddleware(thunk, MashableApiMiddleware()));
  store.subscribe(() => {
    
  });
  return store;  
};