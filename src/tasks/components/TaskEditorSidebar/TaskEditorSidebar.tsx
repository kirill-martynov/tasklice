import { useDispatch, useSelector } from 'react-redux';

import { Sidebar } from '@core/components/Sidebar';

import { getTaskEditorDataSelector } from '@tasks/store/task/taskEditor/taskEditorSelectors';
import { taskEditorActions } from '@tasks/store/task/taskEditor/taskEditorSlice';

import s from './TaskEditorSidebar.module.scss';

export const TaskEditorSidebar = () => {
  const dispatch = useDispatch();

  const data = useSelector(getTaskEditorDataSelector);
  const hasData = Boolean(Object.keys(data).length);

  const handleClose = () => {
    dispatch(taskEditorActions.toggleEditor({}));
  };

  return (
    <Sidebar isShowing={hasData} onClose={handleClose}>
      Sidebar
    </Sidebar>
  );
};
