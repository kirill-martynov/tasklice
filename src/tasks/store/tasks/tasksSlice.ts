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
    removeTask: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      const { item } = action.payload;

      state.data = state.data.map((task) => {
        if (task.id === item.id) {
          return item;
        }
        return task;
      });
    },
  },
});

const tasksPersistConfig = {
  key: 'tasks',
  storage,
};

export const tasksReducer = persistReducer(tasksPersistConfig, tasksSlice.reducer);
export const { actions: tasksActions } = tasksSlice;
