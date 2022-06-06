import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task/Task';

function List({ tasks, updateTasks }) {
  const removeTaskHandler = (taskName) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((i) => i.title === taskName);
    updatedTasks.splice(index, 1);
    updateTasks([...updatedTasks]);
  };
  const checkHandler = (taskName) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((i) => i.title === taskName);
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    updateTasks([...updatedTasks]);
  };
  const renderTasks = () => {
    if (tasks.length) {
      return tasks.map((item) => (
        <Task
          key={item.title}
          title={item.title}
          isDone={item.isDone}
          checkHandler={checkHandler}
          removeTaskHandler={removeTaskHandler}
        />
      ));
    }
    return <li className="list-empty">List of Tasks is empty</li>;
  };
  return <ul className="list">{renderTasks()}</ul>;
}

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool,
    })
  ).isRequired,
  updateTasks: PropTypes.func.isRequired,
};
export default List;
