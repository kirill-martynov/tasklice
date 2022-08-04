import { NavLink, useLocation } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import cn from 'classnames';

import { MENU } from './sidebarConstants';

import s from './Sidebar.module.scss';

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className={s.root}>
      <NavLink className={s.logo} to="/">
        <span>T</span>asklice
      </NavLink>
      <div className={s.content}>
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
    </div>
  );
};
