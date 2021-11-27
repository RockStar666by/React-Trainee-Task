import React from 'react';
import styles from './ShowDescription.module.scss';

export const ShowDescription = () => {
  return (
    <div>
      <img className={styles.showImage} src={null} alt='Show' />
      <div className={styles.showDescription}>This is ShowDescription</div>
      <div className={styles.showInfo}>
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
