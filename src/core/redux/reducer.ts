import { combineReducers } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';

import history from './history';

import { reducer as userReducer } from '@core/store/user/userSlice';

const { routerReducer } = createReduxHistoryContext({ history });

export const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
