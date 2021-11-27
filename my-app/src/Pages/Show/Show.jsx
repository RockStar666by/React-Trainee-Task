import React from 'react';
import { ShowDescription } from '../../components/ShowDescription/ShowDescription';
import { EpisodeList } from '../../components/EpisodesList/EpisodeList';
import styles from './Show.module.scss';

export const Show = () => {
  return (
    <>
      <div className={styles.show}>
        <h1>SHOW</h1>
        <ShowDescription />
        <EpisodeList />
      </div>
    </>
  );
};
