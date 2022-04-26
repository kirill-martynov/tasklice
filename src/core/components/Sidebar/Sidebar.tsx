import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import cn from 'classnames';

import { MENU } from './sidebarConstants';

import s from './Sidebar.module.scss';

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className={s.root}>
      <div className={s.logo} />
      {MENU.map((item) => (
        <NavLink
          key={item.label}
          className={cn(s.menuItem, {
            [s.active]: location.pathname === item.path,
          })}
          to={item.path}
        >
          <SVG src={`icons/${item.icon}.svg`} width={22} height={22} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};
