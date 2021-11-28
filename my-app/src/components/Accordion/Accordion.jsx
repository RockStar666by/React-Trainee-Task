import { EpisodeItem } from 'components/EpisodeItem/EpisodeItem';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styles from './Accordion.module.scss';

export const SeasonAccordion = (props) => {
  const episodesState = useSelector((state) => state.episodes);

  return (
    <div className={styles.tab}>
      <input id={props.seasonNumber} type='checkbox' />
      <label htmlFor={props.seasonNumber}>
        Season #{props.seasonNumber + 1}
      </label>
      <div className={styles['tab-content']}>
        {episodesState.seasons[props.seasonNumber].map((_, idx) => {
          return (
            <EpisodeItem
              name={episodesState.seasons[props.seasonNumber][idx].name}
              seasonNumber={props.seasonNumber}
              number={episodesState.seasons[props.seasonNumber][idx].number}
            />
          );
        })}
      </div>
    </div>
  );
};
