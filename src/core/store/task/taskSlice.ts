import { createSlice } from '@reduxjs/toolkit';

import { Task } from '@core/types/task';

interface TaskState {
  task: Task;
}

const initialState: TaskState = {
  task: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.task = action.payload;
    },
    clearTask: (state) => {
      state.task = null;
    },
  },
});

export const { reducer: taskReducer, actions: taskActions } = taskSlice;
