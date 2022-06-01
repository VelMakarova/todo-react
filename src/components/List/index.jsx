import React from "react";
import Task from "./Task/Task";
import "./list.css";

export default function List ({tasks, updateTasks}) {
  const removeTask = (taskName) => {
    const updatedTasks = [...tasks];
    const i = updatedTasks.findIndex(i => i.title === taskName);
    updatedTasks.splice(i, 1)
    updateTasks([...updatedTasks])
  }
  const checkAsDone = (taskName) => {
    const updatedTasks = [...tasks];
    const i = updatedTasks.findIndex(i => i.title === taskName);
    updatedTasks[i].isDone = !updatedTasks[i].isDone;
    updateTasks([...updatedTasks])
  }
  const renderTasks = () => {
    if (tasks.length) {
      return tasks.map(item => {
          return (
            <Task
              key={item.title}
              title={item.title}
              isDone={item.isDone}
              checkHandler={checkAsDone}
              removeTask={removeTask}
            />)
        }
      )
    } return <li className="list-empty">List of Tasks is empty</li>
  }
  return (
    <ul className="list">
      {renderTasks()}
    </ul>
  )
}