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
      const { item, prevStatus = null } = action.payload;

      const taskStatus = prevStatus || item.status;

      const taskIndex = state.columns[taskStatus].items.findIndex(
        (task: Task) => task.id === item.id
      );

      state.columns[taskStatus].items[taskIndex] = item;
    },
    removeTask: (state, action) => {
      const { id, status } = action.payload;

      state.columns[status].items = state.columns[status].items.filter(
        (item: Task) => item.id !== id
      );
    },
    moveTask: (state, action) => {
      const { sourceData, destinationData, id } = action.payload;

      const currentColumn = state.columns[sourceData.id];
      const destinationColumn = state.columns[destinationData.id];

      const task = currentColumn.items.find((item: Task) => item.id === id);
      const filteredTasks = currentColumn.items.filter((item: Task) => item.id !== id);

      const isSameColumn = sourceData.id === destinationData.id;

      if (isSameColumn) {
        filteredTasks.splice(destinationData.index, 0, task);

        state.columns = {
          ...state.columns,
          [sourceData.id]: { ...currentColumn, items: filteredTasks },
        };
      }

      if (!isSameColumn) {
        state.columns[destinationData.id].items.splice(destinationData.index, 0, {
          ...task,
          status: destinationData.id,
        });

        state.columns = {
          ...state.columns,
          [sourceData.id]: { ...currentColumn, items: filteredTasks },
          [destinationData.id]: {
            ...destinationColumn,
            items: state.columns[destinationData.id].items,
          },
        };
      }
    },
  },
});

const statusesPersistConfig = {
  key: 'stasuses',
  storage,
};

export const statusesReducer = persistReducer(statusesPersistConfig, statusesSlice.reducer);

export const { actions: statusesActions } = statusesSlice;
