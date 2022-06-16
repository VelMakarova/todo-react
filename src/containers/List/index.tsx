import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask, removeTask } from '../../reducer';
import { RootState } from '../../store';
import { Task } from './Task';
import styles from './List.module.scss';
import { TaskData } from '../../types';

export function List() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state);
  const [tasksList] = useState<TaskData[]>(tasks);

  const removeTaskHandler = useCallback((taskName: string) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((i) => i.title === taskName);
    updatedTasks.splice(index, 1);
    dispatch(removeTask(index));
  }, [tasks]);

  const checkHandler = useCallback((taskName: string) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((i) => i.title === taskName);
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    const updatedElement = updatedTasks[index];
    dispatch(updateTask({ index, updatedElement }));
  }, [tasks]);

  const updateTitle = useCallback((taskName: string, updatedName: string) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((i) => i.title === taskName);
    updatedTasks[index].title = updatedName;
    const updatedElement = updatedTasks[index];
    updateTask({ index, updatedElement });
  }, [tasks]);

  const renderTasks = () => {
    if (tasksList.length) {
      return tasksList.map((item: TaskData) => (
        <Task
          key={item.title}
          title={item.title}
          isDone={item.isDone}
          checkHandler={checkHandler}
          removeTaskHandler={removeTaskHandler}
          updateTitle={updateTitle}
        />
      ));
    }
    return <li className={styles.list__empty}>List of Tasks is empty</li>;
  };
  return <ul className={styles.list}>{renderTasks()}</ul>;
}
