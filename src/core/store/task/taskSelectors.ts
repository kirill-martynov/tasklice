import { TRootState } from '@core/redux/reducer';

export const getTaskStateSelector = (state: TRootState) => state.task;

export const getTaskSelector = (state: TRootState) =>
  getTaskStateSelector(state).task;
