import React from 'react';

import { Title } from '@core/components/Title';

import { BoardColumns } from './components/BoardColumns';

import s from './Board.module.scss';

export const Board = () => {
  return (
    <div className={s.root}>
      <Title className={s.title}>Projects</Title>

      <div className={s.content}>
        <BoardColumns />
      </div>
    </div>
  );
};
