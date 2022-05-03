import React from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { Task } from '@core/types/task';
import { Svg } from '@core/components/Svg';

import { taskViewActions } from '@tasks/store/task/taskView/taskViewSlice';

import s from './TaskItem.module.scss';

interface TaskProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(taskViewActions.setTask(task));
  };

  return (
    <div className={s.root} onClick={handleClick}>
      <div className={cn(s.wrapper, s.priorityWrapper)}>
        <span className={cn(s.priority, s[task.priority])}>
          <Svg
            src={`icons/priority-${task.priority}.svg`}
            width={18}
            height={18}
            className={s.priorityIcon}
          />
          {task.priority}
        </span>
      </div>

      <div className={cn(s.wrapper, s.nameWrapper)}>
        <span className={s.name}>{task.name}</span>
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
