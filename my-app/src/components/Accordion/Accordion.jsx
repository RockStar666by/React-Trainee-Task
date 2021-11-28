import * as React from 'react';
import { useSelector } from 'react-redux';
import styles from './Accordion.module.scss';

export const SeasonAccordion = () => {
  const episodesState = useSelector((state) => state.episodes.episodes);
  console.log(episodesState);

  return (
    <div className={styles.tab}>
      <input id='tab-1' type='checkbox' />
      <label htmlFor='tab-1'>Season # {null}</label>
      <div className={styles['tab-content']}>
        <p>Next to the risk dictates a nurse.</p>
      </div>
    </div>
  );
};
