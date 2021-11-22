import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, data, testid, labelName, onChange } = this.props;
    return (
      <label htmlFor={ name } data-testid={ testid }>
        { labelName }
        <select onChange={ onChange } name={ name }>
          {
            data.map((optionData, index) => (
              <option value={ optionData } key={ index }>{ optionData }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  testid: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
