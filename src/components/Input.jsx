import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, onChange, testid, placeholder } = this.props;
    return (
      <label htmlFor={ name }>
        <input
          type={ type }
          name={ name }
          placeholder= { placeholder }
          data-testid={ testid }
          onChange={ onChange }
        />
      </label>
    )
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
