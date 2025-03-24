import React from 'react';
import styles from './App.module.css';
import Counter from './Counter';

export const App = () => {
  return (
    <div className={styles.container}>
      <h1>Please leave feedback</h1>
      <Counter />
    </div>
  );
};
