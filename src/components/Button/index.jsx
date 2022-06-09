import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export function Button({ title, clickHandler, type, extraClass }) {
  return (
    <button
      className={`${styles.button} ${styles[extraClass]} ${styles.button__primary} `}
      type={type}
      onClick={clickHandler}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  extraClass: PropTypes.string
};

Button.defaultProps = {
  extraClass: ''
};
