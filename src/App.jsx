import React, {useState} from "react";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
  const [tasks, updateTasks] = useState([]);

  return (
    <div className="app">
      <main className="main">
        <h1 className="title">Tasks List</h1>
        <Form tasks={tasks} updateTasks={updateTasks} />
        <List tasks={tasks} updateTasks={updateTasks} />
      </main>
    </div>
  );
}
