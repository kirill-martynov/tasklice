import { useSelector } from 'react-redux';

import { getStatusesSelector } from '@core/store/statuses/statusesSelectors';

import { BoardColumn } from '../BoardColumn/BoardColumn';

import s from './BoardColumns.module.scss';

export const BoardColumns = () => {
  const statuses = useSelector(getStatusesSelector);

  return (
    <div className={s.root}>
      {statuses.map((status) => (
        <BoardColumn key={`BOARD-${status}`} status={status} />
      ))}
    </div>
  );
};
