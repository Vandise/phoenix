import { SET_TIERED_STORIES } from '../constants/actions';

const initialState = {};
export default (state = initialState, action) => {
  if (action.type === SET_TIERED_STORIES) {
    return Object.assign({}, state, action.payload.stories);
  }
  return state;
}; 