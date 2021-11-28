import { EPISODES_FETCH_SUCCEEDED, SEASONS_DIVIDED } from '../actions';

const initState = {
  seasons: [],
  episodes: [],
};

export const episodesReducer = (state = initState, action) => {
  switch (action.type) {
    case EPISODES_FETCH_SUCCEEDED: {
      const episodes = action.payload.data;
      return {
        ...state,
        episodes,
      };
    }
    case SEASONS_DIVIDED: {
      const seasons = action.payload.data;
      return {
        ...state,
        seasons,
      };
    }
    default:
      return state;
  }
};
