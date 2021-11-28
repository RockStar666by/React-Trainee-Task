import { combineReducers } from 'redux';
import { showReducer } from './showReducer';
import { episodeReducer } from './episodeReducer';
import { episodesReducer } from './episodesReducer';

export const rootReducer = combineReducers({
  show: showReducer,
  episode: episodeReducer,
  episodes: episodesReducer,
});
