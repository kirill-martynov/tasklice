import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  sidebar: {
    collapsed: false,
  },
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSidebarCollapse: (state, action) => {
      const { collapsed } = action.payload;

      state.sidebar.collapsed = collapsed;
    },
  },
});

const settingsPersistConfig = {
  key: 'settings',
  storage,
};

export const settingsReducer = persistReducer(settingsPersistConfig, settingsSlice.reducer);
export const { actions: settingsActions } = settingsSlice;
