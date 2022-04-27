import React from 'react';
import SVG from 'react-inlinesvg';
import cn from 'classnames';

import { Avatar } from '../Avatar';

import s from './Profile.module.scss';
import { NavLink } from 'react-router-dom';

interface ProfileProps {
  className?: string;
  name?: string;
}

export const Profile = ({ name, className }: ProfileProps) => {
  return (
    <div className={cn(s.root, className)}>
      <div className={s.headerProfile}>
        <Avatar gender="female" />
        <span className={s.prefix}>Hey,</span>
        <span className={s.name}>{name}</span>
        <SVG className={s.arrowIcon} src="icons/arrow-down.svg" />
      </div>

      <div className={s.dropdown}>
        <div className={s.dropdownItem}>
          <NavLink to="/settings">
            <SVG src="icons/settings.svg" width={20} height={20} />
            Settings
          </NavLink>
        </div>
        <div className={s.dropdownItem}>
          <NavLink to="/logout">
            <SVG src="icons/logout.svg" width={20} height={20} />
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};
