import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@core/api/tasks';
import { Task } from '@core/types/task';
import { statusesActions } from '@core/store/statuses/statusesSlice';

export const createTask = createAsyncThunk('tasks/createTask', async (task: Task, { dispatch }) => {
  try {
    const { data } = await api.tasks.create(task);

    dispatch(statusesActions.addTask({ task: data.task }));
  } catch (error) {
    console.error('error', error);
  }
});

export const getTasks = createAsyncThunk('tasks/getTasks', async (_, { dispatch }) => {
  try {
    const { data } = await api.tasks.list();

    dispatch(statusesActions.loadTasks(data));
  } catch (error) {
    console.error('error', error);
  }
});

export const getTaskById = createAsyncThunk(
  'tasks/getTaskById',
  async (id: string, { dispatch }) => {
    try {
      const { data } = await api.tasks.item(id);

      console.log('data', data);
    } catch (error) {
      console.error('error', error);
    }
  }
);
