import { call, put, delay } from 'redux-saga/effects';
import { getShow } from '../api/index';
import { fetchShow } from './saga-show';
import { SHOW_FETCH_SUCCEEDED } from './actions';

describe('fetchShow valid path', () => {
  it('fetches user data', () => {
    const showId = '6771';
    const action = {
      payload: {
        showId,
      },
    };

    const g = fetchShow(action);
    expect(g.next().value).toEqual(delay(100));

    expect(g.next().value).toEqual(call(getShow, showId));

    const userPosts = [{ id: 'user-post-id-1' }];
    expect(g.next(userPosts).value).toEqual(
      put({
        type: SHOW_FETCH_SUCCEEDED,
        payload: {
          data: userPosts,
        },
      })
    );

    expect(g.next().done).toEqual(true);
  });
});
