import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EpisodeItem.module.scss';

export const EpisodeItem = (props) => {
  return (
    <div className={styles['item-container']}>
      <Link
        to={'/season/' + (props.seasonNumber + 1) + '/episode/' + props.number}
      >
        <h3 className={styles['item-header']}>
          Episode {props.number}. {props.name}
        </h3>
      </Link>
    </div>
  );
};
