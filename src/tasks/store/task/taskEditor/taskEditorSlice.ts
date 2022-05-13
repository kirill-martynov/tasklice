import { createSlice } from '@reduxjs/toolkit';

import { Task } from '@core/types/task';

interface TaskEditorState {
  data: Task | Record<string, never>;
  active: boolean;
}

const initialState: TaskEditorState = {
  data: {},
  active: false,
};

const taskEditorSlice = createSlice({
  name: 'taskEditor',
  initialState,
  reducers: {
    toggleEditor: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { reducer: taskEditorReducer, actions: taskEditorActions } = taskEditorSlice;
