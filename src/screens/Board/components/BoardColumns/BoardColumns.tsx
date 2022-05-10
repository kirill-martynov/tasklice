import { BoardColumn } from '../BoardColumn/BoardColumn';

import s from './BoardColumns.module.scss';

export const BoardColumns = () => {
  return (
    <div className={s.root}>
      <BoardColumn title="to do" />
      <BoardColumn title="in progress" />
      <BoardColumn title="in review" />
      <BoardColumn title="done" />
    </div>
  );
};
