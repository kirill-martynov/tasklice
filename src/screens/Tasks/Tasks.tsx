import React from 'react';

import { TASKS } from '@core/constants/tasks';
import { Task } from '@core/types/task';

import { Title } from '@core/components/Title';
import { ScrollableWrapper } from '@core/components/Scrollable';
import { TaskItem } from '@core/components/TaskItem';

import s from './Tasks.module.scss';

export const Tasks = () => {
  return (
    <div className={s.root}>
      <Title className={s.title}>Tasks</Title>

      <ScrollableWrapper>
        <div className={s.content}>
          {TASKS.map((item: Task) => (
            <TaskItem key={item.id} task={item} />
          ))}
        </div>
      </ScrollableWrapper>
    </div>
  );
};
