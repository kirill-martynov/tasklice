import React from 'react';
import { Profile } from '../Profile';

import s from './Header.module.scss';

export const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <Profile name="Christina" className={s.headerProfile} />
      </div>
    </div>
  );
};
