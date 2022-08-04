import { createAsyncThunk } from '@reduxjs/toolkit';

import { Task } from '@core/types/task';
import { statusesActions } from '@core/store/statuses/statusesSlice';

export const createTask = createAsyncThunk('tasks/createTask', async (task: Task, { dispatch }) => {
  try {
    const response = await fetch('api/v1/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    const { data, status } = await response.json();

    dispatch(statusesActions.addTask({ task: data.task }));
  } catch (error) {
    console.error('error', error);
  }
});
