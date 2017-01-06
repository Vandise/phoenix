import { FETCH_TIERED_STORIES, SET_TIERED_STORIES } from '../constants/actions';

export function fetchTieredStories() {
  return {
    type: FETCH_TIERED_STORIES,
    payload: null,
  };
};

export function setTieredStories(storiesJson) {
  return {
    type: SET_TIERED_STORIES,
    payload: {
      stories: storiesJson
    }
  };
};