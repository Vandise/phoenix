import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../reducers/index';

const reducers = combineReducers(Reducers);
const initialState = {
  version: '0.0.1',
};

export default (state = initialState) => {
  const store = createStore(reducers, state, applyMiddleware(thunk));
  store.subscribe(() => {
    
  });
  return store;  
};