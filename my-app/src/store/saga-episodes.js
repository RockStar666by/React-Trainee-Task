import { call, put, takeLatest, delay, select } from 'redux-saga/effects';
import {
  EPISODES_FETCH_REQUESTED,
  EPISODES_FETCH_SUCCEEDED,
  EPISODES_FETCH_FAILED,
  SEASONS_DIVIDED,
} from './actions';
import { getEpisodes } from '../api/index';
import { getSeasonSelector } from './reducers/selectors';

export function* fetchEpisodes(action) {
  yield delay(100);
  try {
    const episodes = yield call(getEpisodes, action.payload.showId);
    yield put({
      type: EPISODES_FETCH_SUCCEEDED,
      payload: {
        data: episodes,
      },
    });
    const seasons = yield select(getSeasonSelector);
    yield put({
      type: SEASONS_DIVIDED,
      payload: {
        data: seasons,
      },
    });
  } catch (e) {
    yield put({
      type: EPISODES_FETCH_FAILED,
      payload: { message: e.message },
    });
  }
}

export function* episodesFetchRequestedWatcherSaga() {
  yield takeLatest(EPISODES_FETCH_REQUESTED, fetchEpisodes);
}
