import React from 'react';
import styles from './ShowDescription.module.scss';

export const ShowDescription = () => {
  return (
    <div className={styles['description-container']}>
      <img className={styles['show-image']} src={null} alt='Show' />
      <div className={styles['show-description']}>This is ShowDescription</div>
      <div className={styles['show-info']}>
        <h2>ShowInfo</h2>
        <div>Network: {null}</div>
        <div>Schedule: {null}</div>
        <div>Status: {null}</div>
        <div>Show Type: {null}</div>
        <div>Genres: {null}</div>
        <div>Episodes ordered: {null}</div>
        <div>Official site: {null}</div>
      </div>
    </div>
  );
};
