import React from 'react';
import cn from 'classnames';

import { Task } from '@core/types/task';

import s from './TaskItem.module.scss';

interface TaskProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskProps) => {
  const handleClick = () => {
    console.log(`push to /task/${task.id}`);
  };

  return (
    <div className={s.root} onClick={handleClick}>
      <div className={cn(s.wrapper, s.priorityWrapper)}>
        <span className={cn(s.priority, s[task.priority])}>
          {task.priority}
        </span>
      </div>

      <div className={cn(s.wrapper, s.nameWrapper)}>
        <span className={s.name}>{task.name}:</span>
      </div>

      <div className={cn(s.wrapper, s.descriptionWrapper)}>
        <span className={s.description}>{task.description}</span>
      </div>

      <div className={cn(s.wrapper, s.typeWrapper)}>
        <span className={cn(s.type, s[task.type])}>{task.type}</span>
      </div>

      <div className={cn(s.wrapper, s.statusWrapper)}>
        <span className={s.status}>status: {task.status}</span>
      </div>
    </div>
  );
};
