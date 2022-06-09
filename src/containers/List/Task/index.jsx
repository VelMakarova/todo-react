import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Button } from '../../../components';
import styles from './Task.module.scss';

export function Task({ title, isDone, checkHandler, removeTaskHandler, updateTitle }) {
  const [inputValue, setValue] = useState({ editInput: title });
  const [editModeOn, toggleEditMode] = useState(false);

  const inputHandler = (e) => {
    const {
      target: { name, value }
    } = e;
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

Task.defaultProps = {
  isDone: false
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  checkHandler: PropTypes.func.isRequired,
  removeTaskHandler: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired
};
