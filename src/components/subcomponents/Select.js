import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      classParagraph,
      classSelect,
      classLabel,
      name,
      data,
      testid,
      labelName,
      onChange,
    } = this.props;
    return (
      <label htmlFor={ name } data-testid={ testid } className={ classLabel }>
        <p className={ classParagraph }>{ labelName }</p>
        <select onChange={ onChange } name={ name } className={ classSelect }>
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
  classParagraph: PropTypes.string.isRequired,
  classSelect: PropTypes.string.isRequired,
  classLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  testid: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
