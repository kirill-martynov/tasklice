import * as React from 'react';
import { useSelector } from 'react-redux';

import { getTasksDataSelector } from '@tasks/store/tasks/tasksSelectors';
import { TaskCard } from '@tasks/components/TaskCard';

import s from './BoardColumn.module.scss';

interface BoardColumnProps {
  title: string;
}

export const BoardColumn = ({ title }: BoardColumnProps) => {
  const tasks = useSelector(getTasksDataSelector);

  return (
    <div className={s.root}>
      <div className={s.header}>
        <h4 className={s.title}>{title}</h4>
      </div>
      <div className={s.content}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
