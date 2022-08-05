import { TRootState } from '@core/redux/reducer';

export const settingsStateSelector = (state: TRootState) => state.settings;

export const getSettingsSidebar = (state: TRootState) => settingsStateSelector(state).sidebar;
export const getSettingsSidebarCollapsed = (state: TRootState) =>
  getSettingsSidebar(state).collapsed;
