import React from 'react';
import styles from './EpisodeList.module.scss';
import { SeasonAccordion } from '../Accordion/Accordion';

export const EpisodeList = () => {
  return (
    <div>
      <h2>This is EpisodeList</h2>
      <SeasonAccordion />
    </div>
  );
};
