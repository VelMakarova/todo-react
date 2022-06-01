import React from "react";
import Checkbox from "../../UI/Checkbox";
import Button from "../../UI/Button";
import "./task.css";

export default function Task ({title, isDone, checkHandler, removeTask}) {
  return (
    <li className={`task ${isDone ? 'is-done' : ''}`}>
      <Checkbox title={title} checkHandler={checkHandler} isChecked={isDone} />
      <span className={'task__title'}>{title}</span>
      <Button title={'Delete'} type={'button'} clickHandler={() => removeTask(title)} extraClass={'delete'} />
    </li>
  )
}