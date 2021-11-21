import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends Component {
  render() {
    return(
      <div>
        <Header 
          email={ this.props.email }
          expenses={ 0 }
          exchange="BRL"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.user.email
});

export default connect(mapStateToProps, null)(Wallet);
