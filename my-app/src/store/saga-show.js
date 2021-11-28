import { call, put, takeLatest, delay } from 'redux-saga/effects';
import {
  SHOW_FETCH_REQUESTED,
  SHOW_FETCH_SUCCEEDED,
  SHOW_FETCH_FAILED,
} from './actions';
import { getShow } from '../api/index';

export function* fetchShow(action) {
  yield delay(100);
  try {
    const show = yield call(getShow, action.payload.showId);
    yield put({
      type: SHOW_FETCH_SUCCEEDED,
      payload: {
        data: show,
      },
    });
  } catch (e) {
    yield put({
      type: SHOW_FETCH_FAILED,
      payload: { message: e.message },
    });
  }
}

export function* showFetchRequestedWatcherSaga() {
  yield takeLatest(SHOW_FETCH_REQUESTED, fetchShow);
}
