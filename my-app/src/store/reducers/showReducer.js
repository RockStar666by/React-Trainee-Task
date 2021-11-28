import { SHOW_FETCH_SUCCEEDED } from '../actions';

const initState = {
  show: {
    averageRuntime: '',
    dvdCountry: '',
    ended: '',
    genres: [],
    id: null,
    image: { medium: '' },
    language: '',
    name: '',
    network: {
      country: {
        name: '',
        code: '',
        timezone: '',
      },
      id: null,
      name: '',
    },
    officialSite: '',
    premiered: '',
    schedule: { time: '', days: [''] },
    status: '',
    summary: '',
    type: '',
    updated: '',
    url: '',
    webChannel: null,
    weight: null,
  },
};

export const showReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_FETCH_SUCCEEDED: {
      const show = action.payload.data;
      return {
        ...state,
        show,
      };
    }
    default:
      return state;
  }
};
