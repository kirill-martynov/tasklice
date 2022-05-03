import { createSlice } from '@reduxjs/toolkit';

interface StatusesState {
  statuses: string[];
}

const initialState: StatusesState = {
  statuses: ['todo', 'in progress', 'in review', 'done'],
};

const statusesSlice = createSlice({
  name: 'statuses',
  initialState,
  reducers: {},
});

export const { reducer: statusesReducer } = statusesSlice;
