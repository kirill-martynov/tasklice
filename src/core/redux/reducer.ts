import { combineReducers } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';

import history from './history';

import { userReducer } from '@core/store/user/userSlice';
import { taskReducer } from '@core/store/task/taskSlice';
import { statusesReducer } from '@core/store/statuses/statusesSlice';

const { routerReducer } = createReduxHistoryContext({ history });

export const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  task: taskReducer,
  statuses: statusesReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
