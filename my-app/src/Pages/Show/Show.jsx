import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowDescription } from '../../components/ShowDescription/ShowDescription';
import { EpisodeList } from '../../components/EpisodesList/EpisodeList';
import styles from './Show.module.scss';
import { SHOW_FETCH_REQUESTED } from 'store/actions';

export const Show = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: SHOW_FETCH_REQUESTED,
      payload: {
        showId: 6771,
      },
    });
  }, []);

  const showState = useSelector((state) => state.show.show);
  return (
    <>
      <div className={styles.show}>
        <h1>{showState.name}</h1>
        <ShowDescription />
        <EpisodeList />
      </div>
    </>
  );
};
