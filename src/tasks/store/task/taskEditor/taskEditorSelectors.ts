import { TRootState } from '@core/redux/reducer';

const getTaskEditorStateSelector = (state: TRootState) => state.task.taskEditor;

export const getTaskEditorActiveSelector = (state: TRootState) =>
  getTaskEditorStateSelector(state).active;
export const getTaskEditorDataSelector = (state: TRootState) =>
  getTaskEditorStateSelector(state).data;
