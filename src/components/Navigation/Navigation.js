import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={s.header}>
      <li className={s.home}>
        <NavLink className={s.mainHeader} to={routes.home}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={s.mainHeader} to={routes.movies}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
