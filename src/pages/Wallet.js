import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import Header from '../components/Header';

class Wallet extends Component {
  render() {
    const { email, totalExpenses } = this.props;
    return (
      <div>
        <Header
          email={ email }
          expenses={ totalExpenses }
          exchange="BRL"
        />
        <WalletForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.totalExpenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
