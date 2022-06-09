import React, { useState } from 'react';
import { List, Form } from './containers';
import styles from './App.module.scss';

function App() {
  const [tasks, updateTasks] = useState([{ title: 'task sofas', isDone: false }]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <a href="/" className="logo">Tasks List</a>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.main__container}>
          <Form tasksList={tasks} updateTasks={updateTasks} />
          <List tasks={tasks} updateTasks={updateTasks} />
        </div>
      </main>
    </div>
  );
}

export default App;
