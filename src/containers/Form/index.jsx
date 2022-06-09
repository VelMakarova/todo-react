import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from '../../components';
import styles from './Form.module.scss';

const initialInputValue = { createItem: '' };

export function Form({ tasksList, updateTasks }) {
  const [inputValue, setValue] = useState(initialInputValue);
  const [error, setError] = useState('');

  const inputHandler = (e) => {
    const {
      target: { name, value }
    } = e;
    setValue({ ...inputValue, [name]: value });
  };

  const errorHandler = (errorMessage) => {
    setError(errorMessage);
    setTimeout(() => setError(''), 2000);
  };

  const addTask = (event) => {
    event.preventDefault();
    const hasDublicates = tasksList.find((task) => task.title === inputValue);
    if (inputValue.createItem.length && !hasDublicates) {
      updateTasks((tasks) => [...tasks, { title: inputValue.createItem, isDone: false }]);
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
        clickHandler={addTask}
        extraClass="button__right-rounded"
      />
      {error !== '' && <div className={styles.form__error}>{error}</div>}
    </form>
  );
}

Form.propTypes = {
  tasksList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool
    })
  ).isRequired,
  updateTasks: PropTypes.func.isRequired
};
