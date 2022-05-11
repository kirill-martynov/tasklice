import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Task } from '@core/types/task';
import { TaskCard } from '@tasks/components/TaskCard';

import { STATUS_LABELS } from '@screens/Board/boardConstants';

import s from './BoardColumn.module.scss';
import { useDrop } from 'react-dnd';
import { tasksActions } from '@tasks/store/tasks/tasksSlice';
import { getTasksDataSelector } from '@tasks/store/tasks/tasksSelectors';

interface BoardColumnProps {
  status: string;
}

export const BoardColumn = ({ status }: BoardColumnProps) => {
  const dispatch = useDispatch();

  const [collectedProps, drop] = useDrop(() => ({
    accept: 'taskCard',
    drop: ({ task }) => {
      if (task.status === status) {
        return;
      }

      dispatch(tasksActions.updateTask({ id: task.id, status }));
    },
    collect: (monitor) => ({
      status,
      isOver: !!monitor.isOver(),
    }),
  }));

  const tasks = useSelector(getTasksDataSelector);

  const title = STATUS_LABELS[status];

  return (
    <div className={s.root} ref={drop}>
      <div className={s.header}>
        <h4 className={s.title}>{title}</h4>
      </div>
      <div className={s.content}>
        {tasks.map(
          (task: Task) =>
            task.status === status && <TaskCard key={task.id} task={task} />
        )}
      </div>
    </div>
  );
};
