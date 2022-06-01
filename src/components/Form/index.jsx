import React, {useState} from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import "./form.css";

export default function Form ({tasks, updateTasks}) {
  const [value, setValue] = useState('');

  const addTask = (event) => {
    event.preventDefault();
    const hasDublicates = tasks.find(task => task.title === value);
    if (value.length && !hasDublicates) {
      updateTasks(tasks => [...tasks, {title: value, isDone: false}])
      setValue('');
    }
  }
  return (
    <form className="form" onSubmit={addTask}>
      <Input value={value} changeValue={setValue} />
      <Button title={'Add Task'} type={'submit'} clickHandler={addTask} extraClass={'add'} />
    </form>
  )
}