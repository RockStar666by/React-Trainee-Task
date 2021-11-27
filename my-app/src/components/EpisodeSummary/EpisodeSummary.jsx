import React from 'react';
import styles from './EpisodeSummary.module.scss';

export const EpisodeSummary = () => {
  return (
    <div className={styles['summary-container']}>
      <img className={styles['episode-image']} src={null} alt='Show' />
      <div className={styles['episode-description']}>
        This is Episode Description
      </div>
      <div className={styles['episode-info']}>
        <h2>Episode Info</h2>
        <div>Number: {null}</div>
        <div>Airdate: {null}</div>
        <div>Runtime: {null}</div>
      </div>
    </div>
  );
};
