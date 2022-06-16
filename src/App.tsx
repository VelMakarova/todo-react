import React from 'react';
import { List, Form } from './containers';
import styles from './App.module.scss';

// eslint-disable-next-line no-undef
function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <a href="/" className="logo">Tasks List</a>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.main__container}>
          <Form />
          <List />
        </div>
      </main>
    </div>
  );
}

export default App;
