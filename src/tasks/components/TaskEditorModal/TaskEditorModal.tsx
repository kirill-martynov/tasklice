import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '@core/components/Modal';

import { getTaskEditorDataSelector } from '@tasks/store/task/taskEditor/taskEditorSelectors';
import { taskEditorActions } from '@tasks/store/task/taskEditor/taskEditorSlice';

import { TaskEditor } from './components/TaskEditor';

import s from './TaskEditorModal.module.scss';

export const TaskEditorModal = () => {
  const dispatch = useDispatch();

  const data = useSelector(getTaskEditorDataSelector);
  const hasData = Boolean(Object.keys(data).length);

  const handleClose = () => {
    dispatch(taskEditorActions.toggleEditor({}));
  };

  return (
    <Modal
      className={s.taskModal}
      isShowing={hasData}
      onClose={handleClose}
      options={{ hasCloseButton: false }}
    >
      <TaskEditor />
    </Modal>
  );
};
