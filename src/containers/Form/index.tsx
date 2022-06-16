import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button } from '../../components';
import styles from './Form.module.scss';
import { TaskData, HandlerType } from '../../types';
import { addTask as addTaskAction } from '../../reducer';

interface FormState {
  createItem: string
}

const initialInputValue: FormState = { createItem: '' };

export function Form() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: any) => state);
  const [inputValue, setValue] = useState<FormState>(initialInputValue);
  const [error, setError] = useState<string>('');

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;
    setValue({ ...inputValue, [name]: value });
  };

  const errorHandler = (errorMessage: string) => {
    setError(errorMessage);
    setTimeout(() => setError(''), 2000);
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasDublicates = tasks.find(
      (task: TaskData) => task.title === inputValue.createItem
    );
    if (inputValue.createItem.length && !hasDublicates) {
      dispatch(addTaskAction({ title: inputValue.createItem, isDone: false }));
      setValue(initialInputValue);
    } else {
      errorHandler('This task is already exist');
    }
  };
  return (
    <form className={styles.form} onSubmit={addTask}>
      <Input
        value={inputValue.createItem}
        name="createItem"
        changeHandler={inputHandler}
        extraClass="input__left-rounded"
      />
      <Button
        title="Add Task"
        type="submit"
        extraClass="button__right-rounded"
      />
      {error !== '' && <div className={styles.form__error}>{error}</div>}
    </form>
  );
}
