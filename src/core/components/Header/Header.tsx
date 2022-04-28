import React from 'react';
import { useSelector } from 'react-redux';

import { getUserSelector } from '@core/store/user/userSelectors';

import { Profile } from '../Profile';

import s from './Header.module.scss';

export const Header = () => {
  const user = useSelector(getUserSelector);

  return (
    <div className={s.root}>
      <div className={s.content}>
        <Profile user={user} className={s.headerProfile} />
      </div>
    </div>
  );
};
