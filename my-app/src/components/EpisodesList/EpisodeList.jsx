import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './EpisodeList.module.scss';
import { SeasonAccordion } from '../Accordion/Accordion';
import { EPISODES_FETCH_REQUESTED } from 'store/actions';

export const EpisodeList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: EPISODES_FETCH_REQUESTED,
      payload: {
        showId: 6771,
      },
    });
  }, []);
  return (
    <div>
      <h2>Episode list:</h2>
      <div className={styles['accordion-container']}>
        <SeasonAccordion />
      </div>
    </div>
  );
};
