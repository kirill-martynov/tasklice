import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '@core/components/Modal';

import { getTaskEditorActiveSelector } from '@tasks/store/task/taskEditor/taskEditorSelectors';
import { taskEditorActions } from '@tasks/store/task/taskEditor/taskEditorSlice';

import { TaskEditor } from './components/TaskEditor';

import s from './TaskEditorModal.module.scss';

export const TaskEditorModal = () => {
  const dispatch = useDispatch();

  const isActive = useSelector(getTaskEditorActiveSelector);

  const handleClose = () => {
    dispatch(taskEditorActions.toggleEditor());
  };

  return (
    <Modal className={s.taskModal} isShowing={isActive} onClose={handleClose}>
      <TaskEditor />
    </Modal>
  );
};
