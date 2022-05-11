import * as React from 'react';
import { useSelector } from 'react-redux';

import { Task } from '@core/types/task';
import { getTasksByStatusSelector } from '@core/store/statuses/statusesSelectors';
import { TaskCard } from '@tasks/components/TaskCard';

import { STATUS_LABELS } from '@screens/Board/boardConstants';

import s from './BoardColumn.module.scss';

interface BoardColumnProps {
  status: string;
}

export const BoardColumn = ({ status }: BoardColumnProps) => {
  const tasks = useSelector(getTasksByStatusSelector(status));

  const title = STATUS_LABELS[status];

  return (
    <div className={s.root}>
      <div className={s.header}>
        <h4 className={s.title}>{title}</h4>
      </div>
      <div className={s.content}>
        {tasks.map((task: Task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
