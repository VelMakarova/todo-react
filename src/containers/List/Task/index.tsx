import React, { useState } from 'react';
import { Checkbox, Button } from '../../../components';
import { TaskType } from '../../../types';
import styles from './Task.module.scss';

interface FormState {
  editInput: string
}

export function Task({ title, isDone, checkHandler, removeTaskHandler, updateTitle } : TaskType) {
  const [inputValue, setValue] = useState<FormState>({ editInput: title });
  const [editModeOn, toggleEditMode] = useState<boolean>(false);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;
    setValue({ ...inputValue, [name]: value });
  };

  const togglerHandler = () => {
    if (editModeOn) {
      if (inputValue.editInput !== title) {
        updateTitle(title, inputValue.editInput);
      }
      toggleEditMode(false);
    } else {
      toggleEditMode(true);
    }
  };

  return (
    <li className={`${styles.task} ${isDone ? styles.task__done : ''}`}>
      <Checkbox title={title} checkHandler={checkHandler} isChecked={isDone} />
      <input
        disabled={!editModeOn}
        type="text"
        value={inputValue.editInput}
        name="editInput"
        onChange={inputHandler}
        className={styles.task__title}
      />
      <Button
        clickHandler={togglerHandler}
        title={editModeOn ? 'Save' : 'Edit'}
        type="button"
      />
      <Button
        title="Delete"
        type="button"
        clickHandler={() => removeTaskHandler(title)}
        extraClass="delete"
      />
    </li>
  );
}
