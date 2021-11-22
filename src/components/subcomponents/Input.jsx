import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, onChange, testid, labelName } = this.props;
    return (
      <label htmlFor={ name }>
        { labelName }
        <input
          type={ type }
          name={ name }
          data-testid={ testid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default Input;
