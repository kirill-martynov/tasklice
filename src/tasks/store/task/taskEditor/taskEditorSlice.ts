import { createSlice } from '@reduxjs/toolkit';

import { Task } from '@core/types/task';

interface TaskEditorState {
  data: Task;
  active: boolean;
}

const initialState: TaskEditorState = {
  data: null,
  active: false,
};

const taskEditorSlice = createSlice({
  name: 'taskEditor',
  initialState,
  reducers: {
    toggleEditor: (state) => {
      state.active = !state.active;
    },
  },
});

export const { reducer: taskEditorReducer, actions: taskEditorActions } =
  taskEditorSlice;
