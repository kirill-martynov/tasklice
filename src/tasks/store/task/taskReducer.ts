import { combineReducers } from '@reduxjs/toolkit';
import { taskEditorReducer } from './taskEditor/taskEditorSlice';
import { taskViewReducer } from './taskView/taskViewSlice';

export const taskReducer = combineReducers({
  taskView: taskViewReducer,
  taskEditor: taskEditorReducer,
});
