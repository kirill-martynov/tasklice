import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import logger from 'redux-logger';

import history from './history';
import { rootReducer } from './reducer';

const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({
  history,
});

const customMiddlewares = [logger, routerMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddlewares),
});

export const reduxHistory = createReduxHistory(store);
