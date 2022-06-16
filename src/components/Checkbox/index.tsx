import React from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxTypes {
  isChecked: boolean,
  checkHandler (args: string): void,
  title: string
}
export function Checkbox({ isChecked, checkHandler, title }: CheckboxTypes) {
  return (
    <label htmlFor={title} className={styles.checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        id={title}
        name={title}
        placeholder={title}
        onChange={() => checkHandler(title)}
      />
      <i className={styles.checkbox__tick} />
    </label>
  );
}
