import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import ReactMarkdown from 'react-markdown';
import cn from 'classnames';

import { taskViewActions } from '@tasks/store/task/taskView/taskViewSlice';
import { getTaskSelector } from '@tasks/store/task/taskView/taskViewSelectors';
import { getStatusesSelector } from '@core/store/statuses/statusesSelectors';

import { Modal } from '../Modal';
import { Svg } from '../Svg';

import s from './TaskModal.module.scss';

const PARTICIPANTS = [
  { id: 1, gender: 'female', avatar: '2' },
  { id: 2, gender: 'male', avatar: '8' },
  { id: 3, gender: 'female', avatar: '1' },
];

const STATUSES_PRIORITY: { [key: string]: number } = {
  todo: 1,
  'in progress': 2,
  'in review': 3,
  done: 4,
};

export const TaskModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const statuses = useSelector(getStatusesSelector);
  const task = useSelector(getTaskSelector);
  const hasTask = !isEmpty(task);

  const handleClose = () => {
    dispatch(taskViewActions.clearTask());
  };

  const handleClick = () => {
    // navigate(`/edit/${task.id}`);

    dispatch(taskViewActions.clearTask());
  };

  return (
    <Modal isShowing={hasTask} onClose={handleClose} className={s.taskModal}>
      {hasTask && (
        <div className={s.root}>
          <div className={s.header}>
            <div className={s.statusWrapper}>
              <div className={s.statuses}>
                {statuses.map((status: string) => (
                  <span
                    key={`TASK-MODAL-${status}`}
                    className={cn(s.status, {
                      [s.active]:
                        STATUSES_PRIORITY[status] ===
                        STATUSES_PRIORITY[task.status],
                    })}
                  >
                    {STATUSES_PRIORITY[status] <
                      STATUSES_PRIORITY[task.status] && (
                      <Svg src="icons/checkmark.svg" width={12} height={12} />
                    )}
                    {status}
                  </span>
                ))}
              </div>
            </div>
            <div className={s.titleWrapper}>
              <div className={s.titleLabel}>
                <Svg src="icons/envelope.svg" width={18} height={18} />
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
                <div
                  className={cn(s.optionValue, s.priority, s[task.priority])}
                >
                  <Svg
                    src={`icons/priority-${task.priority}.svg`}
                    width={16}
                    height={16}
                    className={s.priorityIcon}
                  />
                  {task.priority}
                </div>
              </div>

              <div className={s.option}>
                <span className={s.optionLabel}>Type</span>
                <div className={cn(s.optionValue, s.type, s[task.type])}>
                  {task.type}
                </div>
              </div>

              <div className={s.option}>
                <span className={s.optionLabel}>Due Date</span>
                <div className={cn(s.optionValue, s.estimate)}>
                  <Svg src={`icons/clock.svg`} width={14} height={14} />
                  May 14, 2022
                </div>
              </div>
            </div>
          </div>

          <div className={s.content}>
            <div className={s.descriptionWrapper}>
              <div className={s.descriptionLabel}>
                <Svg src="icons/text.svg" width={18} height={18} />
                <span>Description</span>
              </div>
              <div className={s.description}>
                <ReactMarkdown children={task.description} />
              </div>
            </div>

            <div className={s.attachmentsWrapper}>
              <div className={s.attachmentsHeader}>
                <span>
                  <Svg
                    src="icons/attachment.svg"
                    width={18}
                    height={18}
                    className={s.attachmentIcon}
                  />
                  Attachments
                </span>
                <button>
                  <Svg
                    src="icons/plus.svg"
                    width={16}
                    height={16}
                    className={s.attachmentIcon}
                  />
                  Add an attachment
                </button>
              </div>
              <div className={s.attachments}>Drop files here</div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
