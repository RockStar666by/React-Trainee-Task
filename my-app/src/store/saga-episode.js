import { call, put, takeLatest, delay } from 'redux-saga/effects';
import {
  EPISODE_FETCH_REQUESTED,
  EPISODE_FETCH_SUCCEEDED,
  EPISODE_FETCH_FAILED,
} from './actions';
import { getOneEpisode } from '../api/index';

export function* fetchEpisode(action) {
  yield delay(100);
  try {
    const episode = yield call(
      getOneEpisode,
      action.payload.showId,
      action.payload.season,
      action.payload.episode
    );
    yield put({
      type: EPISODE_FETCH_SUCCEEDED,
      payload: {
        data: episode,
      },
    });
  } catch (e) {
    yield put({
      type: EPISODE_FETCH_FAILED,
      payload: { message: e.message },
    });
  }
}

export function* episodeFetchRequestedWatcherSaga() {
  yield takeLatest(EPISODE_FETCH_REQUESTED, fetchEpisode);
}
