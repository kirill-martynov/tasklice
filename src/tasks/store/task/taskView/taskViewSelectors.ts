import { TRootState } from '@core/redux/reducer';

export const getTaskStateSelector = (state: TRootState) => state.task.taskView;

export const getTaskSelector = (state: TRootState) =>
  getTaskStateSelector(state).data;
