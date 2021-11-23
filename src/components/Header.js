import React, { Component } from 'react';
import PropTypes from 'prop-types';
import trybeLogo from '../images/trybe-logo.png';

class Header extends Component {
  render() {
    const { email, expenses, exchange } = this.props;
    return (
      <header className="wallet-page-header">
        <img src={ trybeLogo } alt="Trybe logo" className="wallet-page-logo" />
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
  expenses: PropTypes.string.isRequired,
};

export default Header;
