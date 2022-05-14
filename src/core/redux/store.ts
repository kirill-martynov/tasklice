import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import logger from 'redux-logger';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import history from './history';
import { rootReducer } from './reducer';

const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({
  history,
});

const middlewareOptions = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};
const customMiddlewares = [logger, routerMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(middlewareOptions).concat(customMiddlewares),
});

export const persistor = persistStore(store);

export const reduxHistory = createReduxHistory(store);
