import React from 'react';
import { useDispatch } from 'react-redux';
import { usePopper } from 'react-popper';
import cn from 'classnames';

import { Svg } from '@core/components/Svg';
import { Task } from '@core/types/task';

import { deleteTask } from '@tasks/store/tasks/tasksThunks';
import { taskEditorActions } from '@tasks/store/task/taskEditor/taskEditorSlice';

import s from './TaskCardHeader.module.scss';

interface TaskCardHeaderProps {
  task: Task;
}
export const TaskCardHeader = ({ task }: TaskCardHeaderProps) => {
  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);

  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-end',
  });

  const { name, priority } = task;

  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    dispatch(deleteTask(task));
  };

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    dispatch(taskEditorActions.toggleEditor(task));
  };

  return (
    <div className={s.root}>
      <div className={s.priorityWrapper}>
        <span className={cn(s.priority, s[priority])}>{priority}</span>
      </div>
      <h5 className={s.title}>{name}</h5>
      <div
        ref={setReferenceElement}
        className={s.buttonWrapper}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <button
          className={cn(s.button, s.more, {
            [s.expanded]: show,
          })}
        >
          <Svg name="more-horizontal" width={24} height={24} />
        </button>
        <div
          ref={setPopperElement}
          className={cn(s.popper, { [s.popperShow]: show })}
          style={styles.popper}
          {...attributes.popper}
        >
          <div className={s.popperContent}>
            <button className={s.popperButton} onClick={(event) => handleEditClick(event)}>
              <Svg name="edit" width={14} height={14} />
            </button>
            <button className={s.popperButton} onClick={(event) => handleRemoveClick(event)}>
              <Svg name="trash" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
