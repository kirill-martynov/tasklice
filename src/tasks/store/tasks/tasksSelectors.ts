import { TRootState } from '@core/redux/reducer';

const tasksStateSelector = (state: TRootState) => state.tasks;

export const getTasksDataSelector = (state: TRootState) => {
  const data = tasksStateSelector(state).data;

  if (!data.length) {
    return [];
  }

  return data;
};
