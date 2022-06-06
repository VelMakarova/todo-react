import React, { useState } from 'react';
import List from './Containers/List';
import Form from './Containers/Form';

function App() {
  const [tasks, updateTasks] = useState([]);

  return (
    <div className="app">
      <main className="main">
        <h1 className="title">Tasks List</h1>
        <Form tasksList={tasks} updateTasks={updateTasks} />
        <List tasks={tasks} updateTasks={updateTasks} />
      </main>
    </div>
  );
}

export default App;
