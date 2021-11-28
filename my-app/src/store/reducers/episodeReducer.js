import { EPISODE_FETCH_SUCCEEDED } from '../actions';

const initState = {
  episode: {
    airdate: '',
    airstamp: '',
    airtime: '',
    id: null,
    image: { medium: '' },
    name: '',
    number: null,
    rating: { average: null },
    runtime: null,
    season: null,
    summary: '',
    type: '',
    url: '',
  },
};

export const episodeReducer = (state = initState, action) => {
  switch (action.type) {
    case EPISODE_FETCH_SUCCEEDED: {
      const episodes = action.payload.data;
      return {
        ...state,
        episodes,
      };
    }
    default:
      return state;
  }
};
