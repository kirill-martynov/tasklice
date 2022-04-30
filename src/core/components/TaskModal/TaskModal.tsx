import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import { taskActions } from '@core/store/task/taskSlice';
import { getTaskSelector } from '@core/store/task/taskSelectors';

import { Modal } from '../Modal';

import s from './TaskModal.module.scss';

export const TaskModal = () => {
  const dispatch = useDispatch();

  const task = useSelector(getTaskSelector);
  const hasTask = !isEmpty(task);

  const handleClose = () => {
    dispatch(taskActions.clearTask());
  };

  return (
    <Modal isShowing={hasTask} onClose={handleClose} className={s.taskModal}>
      {hasTask && (
        <div className={s.root}>
          <div className={s.header}>
            <h3 className={s.title}>{task.name}</h3>
          </div>

          <div className={s.content}>
            <div className={s.info}>
              <p className={s.description}>{task.description}</p>
            </div>
            <div className={s.options}>
              <div className={s.option}>
                <span className={s.optionName}>Type</span>
                <span className={s.optionValue}>{task.type}</span>
              </div>

              <div className={s.option}>
                <span className={s.optionName}>Priority</span>
                <span className={s.optionValue}>{task.priority}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
