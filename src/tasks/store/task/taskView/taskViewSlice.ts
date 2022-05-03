import { createSlice } from '@reduxjs/toolkit';

import { Task } from '@core/types/task';

interface TaskViewState {
  data: Task;
}

const initialState: TaskViewState = {
  data: null,
};

const taskViewSlice = createSlice({
  name: 'taskView',
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.data = action.payload;
    },
    clearTask: (state) => {
      state.data = null;
    },
  },
});

export const { reducer: taskViewReducer, actions: taskViewActions } =
  taskViewSlice;
