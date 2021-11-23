import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends Component {
  sumExpenses(expenses) {
    const result = expenses.map((expense) => {
      const value = parseFloat(expense.value);
      const { currency } = expense;
      const exchangeRate = expense.exchangeRates[currency].ask;
      return (value * exchangeRate);
    }).reduce((a, b) => a + b, 0);
    return (Math.round(result * 100) / 100).toFixed(2);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <Header
          email={ email }
          expenses={ this.sumExpenses(expenses) }
          exchange="BRL"
        />
        <WalletForm />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
