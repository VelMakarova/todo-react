import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Form({ tasksList, updateTasks }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const errorHandler = (errorMessage) => {
    setError(errorMessage);
    setTimeout(() => setError(''), 2000);
  };

  const addTask = (event) => {
    event.preventDefault();
    const hasDublicates = tasksList.find((task) => task.title === value);
    if (value.length && !hasDublicates) {
      updateTasks((tasks) => [...tasks, { title: value, isDone: false }]);
      setValue('');
    } else {
      errorHandler('This task is already exist');
    }
  };
  return (
    <form className="form" onSubmit={addTask}>
      <Input value={value} changeValue={setValue} />
      <Button
        title="Add Task"
        type="submit"
        clickHandler={addTask}
        extraClass="add"
      />
      {error !== '' && <div className="form-error">{error}</div>}
    </form>
  );
}

Form.propTypes = {
  tasksList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool,
    })
  ).isRequired,
  updateTasks: PropTypes.func.isRequired,
};

export default Form;
