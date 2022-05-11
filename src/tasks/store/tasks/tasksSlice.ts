import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { Task } from '@core/types/task';

interface TasksState {
  data: Task[];
}

const initialState: TasksState = {
  data: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.data.push(action.payload);
    },
    updateTask: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, status: action.payload.status };
        }
        return item;
      });
    },
  },
});

const tasksPersistConfig = {
  key: 'tasks',
  storage,
};

export const tasksReducer = persistReducer(
  tasksPersistConfig,
  tasksSlice.reducer
);
export const { actions: tasksActions } = tasksSlice;
