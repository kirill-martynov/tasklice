import { Task } from '@core/types/task';
import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface StatusesState {
  statuses: string[];
  columns: {
    todo: {
      items: Task[];
    };
    progress: {
      items: Task[];
    };
    review: {
      items: Task[];
    };
    done: {
      items: Task[];
    };
  };
}

const initialState: StatusesState = {
  statuses: ['todo', 'progress', 'review', 'done'],
  columns: {
    todo: {
      items: [],
    },
    progress: {
      items: [],
    },
    review: {
      items: [],
    },
    done: {
      items: [],
    },
  },
};

const statusesSlice = createSlice({
  name: 'statuses',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { task } = action.payload;

      state.columns[task.status].items.push(task);
    },
    updateTask: (state, action) => {
      const { item } = action.payload;

      const taskIndex = state.columns[item.status].items.findIndex(
        (task: Task) => task.id === item.id
      );

      state.columns[item.status].items[taskIndex] = item;
    },
    removeTask: (state, action) => {
      const { id, status } = action.payload;

      state.columns[status].items = state.columns[status].items.filter(
        (item: Task) => item.id !== id
      );
    },
    moveTask: (state, action) => {
      state.columns = action.payload.columns;
    },
  },
});

const statusesPersistConfig = {
  key: 'stasuses',
  storage,
};

export const statusesReducer = persistReducer(statusesPersistConfig, statusesSlice.reducer);

export const { actions: statusesActions } = statusesSlice;
