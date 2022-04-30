import React from 'react';
import SVG from 'react-inlinesvg';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { User } from '@core/types/user';

import { Avatar } from '../Avatar';

import s from './Profile.module.scss';

interface ProfileProps {
  user: User;
  className?: string;
}

export const Profile = ({ user, className }: ProfileProps) => {
  return (
    <div className={cn(s.root, className)}>
      <div className={s.headerProfile}>
        <Avatar gender={user.gender} />
        <span className={s.prefix}>Hey,</span>
        <span className={s.name}>{user.firstName}</span>
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
            Log out
          </NavLink>
        </div>
      </div>
    </div>
  );
};
