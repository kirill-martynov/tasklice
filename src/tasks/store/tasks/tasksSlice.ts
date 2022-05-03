import { createSlice } from '@reduxjs/toolkit';

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

export const { reducer: tasksReducer, actions: tasksActions } = tasksSlice;
