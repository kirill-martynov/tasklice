import { createSlice } from '@reduxjs/toolkit';

import { Task } from '@core/types/task';
import { DEFAULT_COLUMNS, DEFAULT_STATUSES } from '@core/constants/columns';

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
  statuses: DEFAULT_STATUSES,
  columns: DEFAULT_COLUMNS,
};

const statusesSlice = createSlice({
  name: 'statuses',
  initialState,
  reducers: {
    loadTasks: (state, action) => {
      const { tasks } = action.payload;

      const columnsWithTasks = tasks.reduce((acc: typeof DEFAULT_COLUMNS, item: Task) => {
        const columnWithItems = acc[item.status].items;
        const columns = {
          ...acc,
          [item.status]: {
            items: [...columnWithItems, item],
          },
        };

        return columns;
      }, DEFAULT_COLUMNS);

      state.columns = columnsWithTasks;
    },
    addTask: (state, action) => {
      const { task } = action.payload;

      state.columns[task.status].items.push(task);
    },
    updateTask: (state, action) => {
      const { item, prevStatus = null } = action.payload;

      const taskStatus = prevStatus || item.status;

      const taskIndex = state.columns[taskStatus].items.findIndex(
        (task: Task) => task._id === item.id
      );

      state.columns[taskStatus].items[taskIndex] = item;
    },
    removeTask: (state, action) => {
      const { id, status } = action.payload;

      state.columns[status].items = state.columns[status].items.filter(
        (item: Task) => item._id !== id
      );
    },
    moveTask: (state, action) => {
      const { sourceData, destinationData, id } = action.payload;

      const currentColumn = state.columns[sourceData.id];
      const destinationColumn = state.columns[destinationData.id];

      const task = currentColumn.items.find((item: Task) => item._id === id);
      const filteredTasks = currentColumn.items.filter((item: Task) => item._id !== id);

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

export const { reducer: statusesReducer, actions: statusesActions } = statusesSlice;
