import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { User } from '@core/types/user';
import { Svg } from '../Svg';
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
        <Svg className={s.arrowIcon} name="arrow-down" />
      </div>

      <div className={s.dropdown}>
        <div className={s.dropdownItem}>
          <NavLink to="/settings">
            <Svg name="settings" width={20} height={20} />
            Settings
          </NavLink>
        </div>

        <div className={s.dropdownItem}>
          <NavLink to="/logout">
            <Svg name="logout" width={20} height={20} />
            Log out
          </NavLink>
        </div>
      </div>
    </div>
  );
};
