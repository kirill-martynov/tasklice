import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

import s from './Sidebar.module.scss';

const MENU = [
  { label: 'Home', path: '/home' },
  { label: 'Tasks', path: '/tasks' },
  { label: 'Board', path: '/board' },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className={s.root}>
      {MENU.map((item) => (
        <NavLink
          key={item.label}
          className={cn(s.menuItem, {
            [s.active]: location.pathname === item.path,
          })}
          to={item.path}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};
