import React from 'react';
import styles from './Button.module.scss';
import { HandlerType } from '../../types';

interface ButtonTypes {
  title: string,
  clickHandler: HandlerType
  type: 'submit' | 'reset' | 'button' | undefined,
  extraClass?: string
}

export function Button({ title, clickHandler, type, extraClass = '' }: ButtonTypes) {
  return (
    <button
      className={`${styles.button} ${extraClass && styles[extraClass]} ${styles.button__primary} `}
      type={type}
      onClick={clickHandler}
    >
      {title}
    </button>
  );
}
