import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ShowDescription.module.scss';
import Parser from 'html-react-parser';

export const ShowDescription = () => {
  const showState = useSelector((state) => state.show.show);

  return (
    <div className={styles['description-container']}>
      <img
        className={styles['show-image']}
        src={showState.image.medium}
        alt='Show'
      />
      <div className={styles['show-description']}>
        {Parser(showState.summary)}
      </div>
      <div className={styles['show-info']}>
        <h2>{showState.name}</h2>
        <div>Network: {showState.network.name}</div>
        <div>
          Schedule: {showState.schedule.days},{showState.schedule.time}
        </div>
        <div>Status: {showState.status}</div>
        <div>Show Type: {showState.type}</div>
        <div>Genres: {showState.genres.join(', ')}</div>
        <div>
          Official site: <a href={showState.officialSite}>Link</a>
        </div>
      </div>
    </div>
  );
};
