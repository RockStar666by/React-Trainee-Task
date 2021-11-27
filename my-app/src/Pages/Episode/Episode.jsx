import React from 'react';
import { EpisodeSummary } from '../../components/EpisodeSummary/EpisodeSummary';
import style from './Episode.module.scss';

export const Episode = () => {
  return (
    <>
      <div className={style.episode}>
        <h1>EPISODE</h1>
        <EpisodeSummary />
      </div>
    </>
  );
};
