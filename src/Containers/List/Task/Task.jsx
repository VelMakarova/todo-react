import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';

function Task({
  title, isDone, checkHandler, removeTaskHandler,
}) {
  return (
    <li className={`task ${isDone ? 'is-done' : ''}`}>
      <Checkbox title={title} checkHandler={checkHandler} isChecked={isDone} />
      <span className="task__title">{title}</span>
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
  isDone: false,
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  checkHandler: PropTypes.func.isRequired,
  removeTaskHandler: PropTypes.func.isRequired,
};

export default Task;
