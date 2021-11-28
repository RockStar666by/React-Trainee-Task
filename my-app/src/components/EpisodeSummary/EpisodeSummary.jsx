import React from 'react';
import { useSelector } from 'react-redux';
import Parser from 'html-react-parser';
import styles from './EpisodeSummary.module.scss';

export const EpisodeSummary = () => {
  const episodeState = useSelector((state) => state.episode.episode);
  console.log(episodeState);
  return (
    <div className={styles['summary-container']}>
      <img
        className={styles['episode-image']}
        src={episodeState.image === null ? null : episodeState.image.medium}
        alt={episodeState.name}
      />
      <div className={styles['episode-description']}>
        {Parser(
          episodeState.summary === null ? 'No summary' : episodeState.summary
        )}
      </div>
      <div className={styles['episode-info']}>
        <h2>Episode Info</h2>
        <div>Number: {episodeState.number}</div>
        <div>Airdate: {episodeState.airdate}</div>
        <div>Runtime: {episodeState.runtime}</div>
      </div>
    </div>
  );
};
