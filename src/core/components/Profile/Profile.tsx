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
      <div className={s.header}>
        <Avatar gender={user.gender} />
        <div className={s.info}>
          <span className={s.name}>
            {user.firstName} {user.lastName}
          </span>
          <span className={s.email}>{user.email}</span>
        </div>
        <div className={s.iconWrapper}>
          <Svg name="arrow-down" width={20} height={20} />
        </div>
      </div>

      <div className={s.dropdown}>
        <ul className={s.actions}>
          <li className={s.actionItem}>
            <span className={s.actionItemIcon}>
              <Svg name="user" width={16} height={16} />
            </span>
            <span>Profile</span>
          </li>
          <li className={s.actionItem}>
            <span className={s.actionItemIcon}>
              <Svg name="settings" width={16} height={16} />
            </span>
            <span>Settings</span>
          </li>
          <hr />
          <li className={s.actionItem}>
            <span className={s.actionItemIcon}>
              <Svg name="logout" width={16} height={16} />
            </span>
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
