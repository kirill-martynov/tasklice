import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserSelector } from '@core/store/user/userSelectors';

import { Button } from '../Button';
import { Profile } from '../Profile';
import { Svg } from '../Svg';

import s from './Header.module.scss';

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(getUserSelector);

  const handleAdd = () => {
    navigate('/create');
  };

  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.right}>
          <Button theme="secondary" className={s.addButton} onClick={handleAdd}>
            <Svg src="icons/plus.svg" width={16} height={16} />
            Add
          </Button>
          <Profile user={user} className={s.headerProfile} />
        </div>
      </div>
    </div>
  );
};
