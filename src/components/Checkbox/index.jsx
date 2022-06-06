import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ isChecked, checkHandler, title }) {
  return (
    <label htmlFor={title} className="checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        id={title}
        name={title}
        onChange={() => checkHandler(title)}
      />
      <i className="checkbox-tick" />
    </label>
  );
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  checkHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  isChecked: false,
};

export default Checkbox;
