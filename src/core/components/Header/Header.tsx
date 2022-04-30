import React from 'react';
import { useSelector } from 'react-redux';
import SVG from 'react-inlinesvg';

import { getUserSelector } from '@core/store/user/userSelectors';
import { Button } from '../Button';

import { Profile } from '../Profile';

import s from './Header.module.scss';

export const Header = () => {
  const user = useSelector(getUserSelector);

  const handleAdd = () => {
    console.log('handleAdd');
  };

  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.right}>
          <Button className={s.addButton} onClick={handleAdd}>
            <SVG src="icons/plus.svg" width={16} height={16} />
            Add
          </Button>
          <Profile user={user} className={s.headerProfile} />
        </div>
      </div>
    </div>
  );
};
