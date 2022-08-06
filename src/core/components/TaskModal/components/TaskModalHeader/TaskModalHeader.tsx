import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { Task } from '@core/types/task';
import { getStatusesSelector } from '@core/store/statuses/statusesSelectors';
import { Svg } from '@core/components/Svg';

import { taskViewActions } from '@tasks/store/task/taskView/taskViewSlice';
import { TASK_LABELS } from '@tasks/tasksConstants';

import s from './TaskModalHeader.module.scss';
import { PARTICIPANTS, STATUSES_PRIORITY } from '../../taskModalConstants';

interface TaskModalHeaderProps {
  task: Task;

  onChange: (field: string, value: string) => void;
}

export const TaskModalHeader = ({ task, onChange }: TaskModalHeaderProps) => {
  const dispatch = useDispatch();

  const statuses = useSelector(getStatusesSelector);

  const handleClick = () => {
    dispatch(taskViewActions.clearTask());
  };

  const handleUpdateTask = (field: string, value: string) => {
    onChange(field, value);
  };

  return (
    <div className={s.root}>
      <div className={s.statusWrapper}>
        <div className={s.statuses}>
          {statuses.map((status: string) => (
            <span
              key={`TASK-MODAL-${status}`}
              className={cn(s.status, {
                [s.active]: STATUSES_PRIORITY[status] === STATUSES_PRIORITY[task.status],
                [s.done]: status === 'done' && task.status === 'done',
              })}
              onClick={() => handleUpdateTask('status', status)}
            >
              {STATUSES_PRIORITY[status] < STATUSES_PRIORITY[task.status] && (
                <Svg name="checkmark" width={12} height={12} />
              )}
              {TASK_LABELS[status]}
            </span>
          ))}
        </div>
      </div>
      <div className={s.titleWrapper}>
        <div className={s.titleLabel}>
          <Svg name="envelope" width={18} height={18} />
          <span>Task Name</span>
        </div>
        <h3 className={s.title} onClick={handleClick}>
          {task.name}
        </h3>
      </div>
      <div className={s.options}>
        <div className={s.option}>
          <span className={s.optionLabel}>Participants</span>
          <div className={cn(s.optionValue, s.optionValueList)}>
            {PARTICIPANTS.map((participant) => (
              <div key={participant.id} className={s.participant}>
                <img
                  src={`icons/avatars/${participant.gender}-${participant.avatar}.svg`}
                  alt="avatar"
                />
              </div>
            ))}
          </div>
        </div>

        <div className={s.option}>
          <span className={s.optionLabel}>Priority</span>
          <div className={cn(s.optionValue, s.priority, s[task.priority])}>
            <Svg
              name={`priority-${task.priority}`}
              width={16}
              height={16}
              className={s.priorityIcon}
            />
            {task.priority}
          </div>
        </div>

        <div className={s.option}>
          <span className={s.optionLabel}>Type</span>
          <div className={cn(s.optionValue, s.type, s[task.type])}>{task.type}</div>
        </div>

        <div className={s.option}>
          <span className={s.optionLabel}>Due Date</span>
          <div className={cn(s.optionValue, s.estimate)}>
            <Svg name="clock" width={14} height={14} />
            May 14, 2022
          </div>
        </div>
      </div>
    </div>
  );
};
