import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import cn from 'classnames';

import { settingsActions } from '@core/store/settings/slice';
import { getSettingsSidebarCollapsed } from '@core/store/settings/selectors';

import { MENU } from './sidebarConstants';

import s from './Sidebar.module.scss';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const collapsed = useSelector(getSettingsSidebarCollapsed);

  const handleCollapse = () => {
    dispatch(settingsActions.setSidebarCollapse({ collapsed: !collapsed }));
  };

  return (
    <div
      className={cn(s.root, {
        [s.collapsed]: collapsed,
      })}
    >
      <NavLink className={s.logo} to="/">
        <span className={s.logoIcon}>T</span>
        <span>Tasklice</span>
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
            <div className={s.iconWrapper}>
              <SVG src={`icons/${item.icon}.svg`} width={24} height={24} />
            </div>
            <span>{item.label}</span>
          </NavLink>
        ))}
        <button className={cn(s.menuItem, s.button)} onClick={handleCollapse}>
          <div className={s.iconWrapper}>
            <SVG src={`icons/download.svg`} width={24} height={24} />
          </div>
          Collapse
        </button>
      </div>
    </div>
  );
};
