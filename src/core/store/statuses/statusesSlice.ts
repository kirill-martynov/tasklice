import { Task } from '@core/types/task';
import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {
    addTask: (state, action) => {
      const { payload } = action;

      state.tasks[payload.task.status].push(payload.task);
    },
  },
});

export const { reducer: statusesReducer, actions: statusesActions } =
  statusesSlice;
