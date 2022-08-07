import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import ReactMarkdown from 'react-markdown';

import { Task } from '@core/types/task';
import { Modal } from '@core/components/Modal';
import { Svg } from '@core/components/Svg';
import { statusesActions } from '@core/store/statuses/statusesSlice';

import { taskViewActions } from '@tasks/store/task/taskView/taskViewSlice';
import { getTaskSelector } from '@tasks/store/task/taskView/taskViewSelectors';

import { TaskModalHeader } from './components/TaskModalHeader';

import s from './TaskModal.module.scss';

export const TaskModal = () => {
  const dispatch = useDispatch();

  const [data, setData] = React.useState<Task>(null);

  const task = useSelector(getTaskSelector);

  const hasTask = !isEmpty(data);

  React.useEffect(() => {
    setData(task);
  }, [task]);

  const handleUpdate = (field: string, value: string) => {
    const item = { ...data, [field]: value };

    setData(item);
  };

  const handleClose = () => {
    dispatch(taskViewActions.clearTask());
    dispatch(statusesActions.updateTask({ item: data, prevStatus: task.status }));

    if (task.status !== data.status) {
      const moveData = {
        sourceData: { id: task.status },
        destinationData: { id: data.status },
        id: data._id,
      };

      dispatch(statusesActions.moveTask(moveData));
    }

    setData(null);
  };

  return (
    <Modal isShowing={hasTask} onClose={handleClose} className={s.taskModal}>
      {hasTask && (
        <div className={s.root}>
          <TaskModalHeader task={data} onChange={handleUpdate} />

          <div className={s.content}>
            <div className={s.descriptionWrapper}>
              <div className={s.descriptionLabel}>
                <Svg name="text" width={18} height={18} />
                <span>Description</span>
              </div>
              <div className={s.description}>
                <ReactMarkdown children={task.description} />
              </div>
            </div>

            <div className={s.attachmentsWrapper}>
              <div className={s.attachmentsHeader}>
                <span>
                  <Svg name="attachment" width={18} height={18} className={s.attachmentIcon} />
                  Attachments
                </span>
                <button>
                  <Svg name="plus" width={16} height={16} className={s.attachmentIcon} />
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
