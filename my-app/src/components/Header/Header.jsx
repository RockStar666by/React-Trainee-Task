import React from 'react';
import styles from './Header.module.scss';

import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
        <NavLink activeClassName='active' to='/episode/1'>
          Episodes
        </NavLink>
      </nav>
    </div>
  );
};
