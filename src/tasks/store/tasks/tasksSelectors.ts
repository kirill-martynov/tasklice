import { TRootState } from '@core/redux/reducer';

import { getStatusesColumns } from '@core/store/statuses/statusesSelectors';

const tasksStateSelector = (state: TRootState) => state.tasks;

export const getTasksDataSelector = (state: TRootState) => {
  const columns = getStatusesColumns(state);

  const columnKeys = Object.keys(columns);

  return columnKeys.reduce((acc, columnName) => {
    return [...acc, ...columns[columnName].items];
  }, []);
};
