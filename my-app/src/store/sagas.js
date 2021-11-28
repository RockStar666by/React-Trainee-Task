import { all } from 'redux-saga/effects';
import { episodesFetchRequestedWatcherSaga } from './saga-episodes';
import { showFetchRequestedWatcherSaga } from './saga-show';

export function* rootSaga() {
  yield all([
    showFetchRequestedWatcherSaga(),
    episodesFetchRequestedWatcherSaga(),
  ]);
}
