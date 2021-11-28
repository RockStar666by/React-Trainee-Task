import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ShowDescription } from '../../components/ShowDescription/ShowDescription';
import { EpisodeList } from '../../components/EpisodesList/EpisodeList';
import styles from './Show.module.scss';
import { SHOW_FETCH_REQUESTED } from 'store/actions';
import { useSelector } from 'react-redux';

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
  return (
    <>
      <div className={styles.show}>
        <h1>SHOW</h1>
        <ShowDescription />
        <EpisodeList />
      </div>
    </>
  );
};
