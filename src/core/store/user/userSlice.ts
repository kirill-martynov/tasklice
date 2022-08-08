import { createSlice } from '@reduxjs/toolkit';

import { User } from '@core/types/user';

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    id: 1,
    firstName: 'Peter',
    lastName: 'Parker',
    gender: 'male',
    email: 'peter.p@gmail.com',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { reducer: userReducer } = userSlice;
