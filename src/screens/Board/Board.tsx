import React from 'react';

import { Title } from '@core/components/Title';

import s from './Board.module.scss';

export const Board = () => {
  return (
    <div className={s.root}>
      <Title>Board</Title>
    </div>
  );
};
