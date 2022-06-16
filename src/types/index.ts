import React from 'react';

export interface TaskData {
  title: string,
  isDone: boolean
}

export interface TaskType extends TaskData {
  checkHandler(arg: string): void,
  removeTaskHandler(arg: string): void,
  updateTitle(arg1: string, arg2: string): void
}

export interface ActionType <P = undefined, T = string> {
  type: T,
  payload: P,
}

export type HandlerType<T = React.MouseEvent> = (arg: T) => void;
