import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

export function Input({ value, name, changeHandler, extraClass }) {
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

Input.propTypes = {
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  extraClass: PropTypes.string
};
Input.defaultProps = {
  extraClass: ''
};
