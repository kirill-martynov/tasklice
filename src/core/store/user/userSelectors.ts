import { TRootState } from '@core/redux/reducer';

const getUserStateSelector = (state: TRootState) => state.user;

export const getUserSelector = (state: TRootState) =>
  getUserStateSelector(state).user;
