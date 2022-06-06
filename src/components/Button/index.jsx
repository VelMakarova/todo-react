import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  title, clickHandler, type, extraClass,
}) {
  return (
    <button
      className={`btn ${extraClass && extraClass}`}
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
  extraClass: PropTypes.string,
};

Button.defaultProps = {
  extraClass: '',
};
