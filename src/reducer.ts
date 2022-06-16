import { createSlice } from '@reduxjs/toolkit';
import { TaskData, ActionType } from './types';

const initState = [{ title: 'qwe', isDone: true }];

const { actions, reducer } = createSlice({
  name: 'tasks',
  initialState: initState,
  reducers: {
    addTask: (state, action: ActionType<TaskData>) => {
      const newItem: TaskData = { title: action.payload.title, isDone: action.payload.isDone };
      return [...state, newItem];
    },
    removeTask: (state, action: ActionType<number>) => {
      state.splice(action.payload, 1);
    },
    updateTask: (state, action: ActionType<{index: number, updatedElement: TaskData}>) => {
      const { index, updatedElement } = action.payload;
      state.splice(index, 1, updatedElement);
    }
  }
});
export const { addTask, updateTask, removeTask } = actions;
export default reducer;
