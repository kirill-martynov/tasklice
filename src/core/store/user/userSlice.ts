import { createSlice } from '@reduxjs/toolkit';

import { User } from '@core/types/user';

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    id: 1,
    name: 'Christina',
    gender: 'female',
    email: 'christina.m@gmail.com',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { reducer } = userSlice;
