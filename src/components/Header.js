import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses, exchange } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { `Email: ${email}` }
        </p>
        <p data-testid="total-field">
          { `Despesa total: ${expenses} ` }
          <span data-testid="header-currency-field">{ exchange }</span>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default Header;
