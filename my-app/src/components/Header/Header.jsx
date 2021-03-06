import React from 'react';
import styles from './Header.module.scss';

import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles['header-nav']}>
        <NavLink className={styles.link} to='/'>
          Home
        </NavLink>
      </nav>
    </div>
  );
};
