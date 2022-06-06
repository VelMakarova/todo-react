import React from 'react';
import PropTypes from 'prop-types';

function Input({ value, changeValue }) {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={(e) => changeValue(e.target.value)}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default Input;
