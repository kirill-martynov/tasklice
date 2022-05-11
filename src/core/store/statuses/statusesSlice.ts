import { Task } from '@core/types/task';
import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface StatusesState {
  statuses: string[];
  tasks: {
    todo: Task[];
    progress: Task[];
    review: Task[];
    done: Task[];
  };
}

const initialState: StatusesState = {
  statuses: ['todo', 'progress', 'review', 'done'],
  tasks: {
    todo: [],
    progress: [],
    review: [],
    done: [],
  },
};

const statusesSlice = createSlice({
  name: 'statuses',
  initialState,
  reducers: {},
});

const statusesPersistConfig = {
  key: 'stasuses',
  storage,
};

export const statusesReducer = persistReducer(
  statusesPersistConfig,
  statusesSlice.reducer
);

export const { actions: statusesActions } = statusesSlice;
