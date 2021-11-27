import React from 'react';
import styles from './EpisodeList.module.scss';
import { SeasonAccordion } from '../Accordion/Accordion';

export const EpisodeList = () => {
  return (
    <div>
      <h2>Episode list:</h2>
      <div className={styles['accordion-container']}>
        <SeasonAccordion />
        <SeasonAccordion />
        <SeasonAccordion />
        <SeasonAccordion />
        <SeasonAccordion />
        <SeasonAccordion />
        <SeasonAccordion />
        <SeasonAccordion />
        <SeasonAccordion />
      </div>
    </div>
  );
};
