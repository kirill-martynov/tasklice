import * as React from 'react';
import { useDispatch } from 'react-redux';

import { ScrollableWrapper } from '@core/components/Scrollable';

import { getTasks } from '@tasks/store/tasks/tasksThunks';

import { BoardColumns } from './components/BoardColumns';

import s from './Board.module.scss';

export const Board = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div className={s.root}>
      <ScrollableWrapper className={s.scrollableWrapper}>
        <div className={s.content}>
          <BoardColumns />
        </div>
      </ScrollableWrapper>
    </div>
  );
};
