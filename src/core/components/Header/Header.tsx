import React from 'react';
import { useSelector } from 'react-redux';
import SVG from 'react-inlinesvg';

import { getUserSelector } from '@core/store/user/userSelectors';
import { useModal } from '@core/hooks/useModal';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { Profile } from '../Profile';

import s from './Header.module.scss';

export const Header = () => {
  const { isShowing, toggleModal } = useModal();

  const user = useSelector(getUserSelector);

  const handleAdd = () => {
    console.log('handleAdd');

    toggleModal();
  };

  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.right}>
          <Button theme="secondary" className={s.addButton} onClick={handleAdd}>
            <SVG src="icons/plus.svg" width={16} height={16} />
            Add
          </Button>
          <Profile user={user} className={s.headerProfile} />
        </div>
      </div>

      <Modal isShowing={isShowing} onClose={toggleModal}>
        hello
      </Modal>
    </div>
  );
};
