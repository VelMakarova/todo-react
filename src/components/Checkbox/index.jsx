import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

export function Checkbox({ isChecked, checkHandler, title }) {
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

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  checkHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

Checkbox.defaultProps = {
  isChecked: false
};
