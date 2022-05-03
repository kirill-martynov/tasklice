import React from 'react';
import { useSelector } from 'react-redux';

import { TASKS } from '@core/constants/tasks';
import { Task } from '@core/types/task';

import { Title } from '@core/components/Title';
import { ScrollableWrapper } from '@core/components/Scrollable';
import { TaskItem } from '@core/components/TaskItem';
import { TaskModal } from '@core/components/TaskModal';

import { getTasksDataSelector } from '@tasks/store/tasks/tasksSelectors';

import s from './Tasks.module.scss';

export const Tasks = () => {
  const tasks = useSelector(getTasksDataSelector);

  return (
    <div className={s.root}>
      <Title className={s.title}>Tasks</Title>

      <ScrollableWrapper>
        <div className={s.content}>
          {tasks.map((item: Task) => (
            <TaskItem key={item.id} task={item} />
          ))}
        </div>
      </ScrollableWrapper>
      <TaskModal />
    </div>
  );
};
