import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const episodesState = useSelector((state) => state.episodes);

  return (
    <div>
      <h2 className={styles['accordion-header']}>Episode list:</h2>
      <div className={styles['accordion-container']}>
        {episodesState.seasons.map((_, index) => {
          return <SeasonAccordion seasonNumber={index} />;
        })}
      </div>
    </div>
  );
};
