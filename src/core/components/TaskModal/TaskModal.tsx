import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import cn from 'classnames';

import { taskActions } from '@core/store/task/taskSlice';
import { getTaskSelector } from '@core/store/task/taskSelectors';

import { Modal } from '../Modal';
import { Svg } from '../Svg';

import s from './TaskModal.module.scss';

const PARTICIPANTS = [
  { id: 1, gender: 'female', avatar: '2' },
  { id: 2, gender: 'male', avatar: '8' },
  { id: 3, gender: 'female', avatar: '1' },
];

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
            <div className={s.titleWrapper}>
              <div className={s.titleLabel}>
                <Svg src="icons/envelope.svg" width={18} height={18} />
                <span>Task Name</span>
              </div>
              <h3 className={s.title}>{task.name}</h3>
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
                <div className={s.optionValue}>{task.priority}</div>
              </div>

              <div className={s.option}>
                <span className={s.optionLabel}>Type</span>
                <div className={s.optionValue}>{task.type}</div>
              </div>

              <div className={s.option}>
                <span className={s.optionLabel}>Due Date</span>
                <div className={s.optionValue}>May 14, 2022</div>
              </div>
            </div>
          </div>

          <div className={s.content}>
            <div className={s.descriptionWrapper}>
              <div className={s.descriptionLabel}>
                <Svg src="icons/text.svg" width={18} height={18} />
                <span>Description</span>
              </div>
              <p className={s.description}>{task.description}</p>
            </div>

            <div className={s.attachmentsWrapper}>
              <div className={s.attachmentsHeader}>
                <span>
                  <Svg src="icons/attachment.svg" width={18} height={18} />
                  Attachments
                </span>
                <button>
                  <Svg src="icons/plus.svg" width={18} height={18} />
                  Add an attachment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
