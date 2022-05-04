import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface TasksState {
  data: any[];
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
