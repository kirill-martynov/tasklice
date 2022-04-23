import { combineReducers } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';

import history from './history';

const { routerReducer } = createReduxHistoryContext({ history });

export const reducer = combineReducers({
  router: routerReducer,
});
