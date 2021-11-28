import React from 'react';
import styles from './EpisodeItem.module.scss';
import { SeasonAccordion } from '../Accordion/Accordion';

export const EpisodeItem = () => {
  return (
    <div>
      <h2>episode item</h2>
      <div className={styles['item-container']}></div>
    </div>
  );
};
