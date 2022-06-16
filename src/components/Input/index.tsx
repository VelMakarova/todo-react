import React from 'react';
import styles from './Input.module.scss';

interface InputType {
  value: string,
  name: string,
  changeHandler(e: React.FormEvent<HTMLInputElement>): void,
  extraClass?: string
}

export function Input({ value, name, changeHandler, extraClass }: InputType) {
  return (
    <input
      className={`${styles.input} ${extraClass && styles[extraClass]}`}
      type="text"
      value={value}
      name={name}
      onChange={(e) => changeHandler(e)}
    />
  );
}
