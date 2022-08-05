import React from 'react';

import { Title } from '@core/components/Title';

import { BoardColumns } from './components/BoardColumns';

import s from './Board.module.scss';

export const Board = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <BoardColumns />
      </div>
    </div>
  );
};
