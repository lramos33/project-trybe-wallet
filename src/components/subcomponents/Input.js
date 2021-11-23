import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      // Props para css
      classParagraph,
      classInput,
      classLabel,
      // Props para aplicação
      type,
      value,
      name,
      onChange,
      testid,
      labelName,
    } = this.props;
    return (
      <label htmlFor={ name } className={ classLabel }>
        <p className={ classParagraph }>{ labelName }</p>
        <input
          className={ classInput }
          value= { value }
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
  classParagraph: PropTypes.string.isRequired,
  classInput: PropTypes.string.isRequired,
  classLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default Input;
