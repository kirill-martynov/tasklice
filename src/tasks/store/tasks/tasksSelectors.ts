import { TRootState } from '@core/redux/reducer';
import { TASKS } from '@core/constants/tasks';

const tasksStateSelector = (state: TRootState) => state.tasks;

export const getTasksDataSelector = (state: TRootState) => {
  const data = tasksStateSelector(state).data;

  if (!data.length) {
    return [];
  }

  return data;
};
