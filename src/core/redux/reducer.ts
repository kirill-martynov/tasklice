import { combineReducers } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';

import history from './history';

import { userReducer } from '@core/store/user/userSlice';
import { statusesReducer } from '@core/store/statuses/statusesSlice';
import { taskReducer } from '@tasks/store/task/taskReducer';
import { tasksReducer } from '@tasks/store/tasks/tasksSlice';
import { settingsReducer } from '@core/store/settings/slice';

const { routerReducer } = createReduxHistoryContext({ history });

export const rootReducer = combineReducers({
  router: routerReducer,
  settings: settingsReducer,
  user: userReducer,
  statuses: statusesReducer,
  task: taskReducer,
  tasks: tasksReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
