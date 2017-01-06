import { API_ENDPOINT, API_VERSION, API_ADD_FLAGS } from '../constants/settings';
import { FETCH_TIERED_STORIES } from '../constants/actions';
import { setTieredStories } from '../actions/storiesActions';

export default mashableApiMiddleware = () => {
  return store => next => action => {
    if (action.type === FETCH_TIERED_STORIES) {
      return fetch(`${API_ENDPOINT}/${API_VERSION}/posts/tiers/${API_ADD_FLAGS}`)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          store.dispatch(setTieredStories(responseJson));
        })
        .then((dispatched) => {
          return next(action);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return next(action);
  };
};