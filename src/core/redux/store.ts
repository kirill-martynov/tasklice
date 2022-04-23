import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import logger from 'redux-logger';

import history from './history';
import { reducer } from './reducer';

const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({
  history,
});

const customMiddlewares = [logger, routerMiddleware];

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddlewares),
});

export const reduxHistory = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
