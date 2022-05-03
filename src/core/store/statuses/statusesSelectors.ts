import { TRootState } from '@core/redux/reducer';

const getStatusesStateSelector = (state: TRootState) => state.statuses;

export const getStatusesSelector = (state: TRootState) =>
  getStatusesStateSelector(state).statuses;
