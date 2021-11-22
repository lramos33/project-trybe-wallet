import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/subcomponents/Input';
import { emailAction } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.checkInputs = this.checkInputs.bind(this);

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.setState({ isDisabled: !this.checkInputs() });
    });
  }

  onButtonClick() {
    const { history, loginDispatch } = this.props;
    const { email } = this.state;
    loginDispatch(email);
    history.push('/carteira');
  }

  checkInputs() {
    const { email, password } = this.state;
    const minLength = 6;
    const EMAIL_REGEX = /\S+@\S+\.\S+/;
    return (EMAIL_REGEX.test(email) && password.length >= minLength);
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <fieldset>
        <form>
          <Input
            type="email"
            name="email"
            labelName="Email"
            testid="email-input"
            onChange={ this.onInputChange }
          />
          <Input
            type="password"
            name="password"
            labelName="Password"
            testid="password-input"
            onChange={ this.onInputChange }
          />
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ this.onButtonClick }
          >
            Entrar
          </button>
        </form>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (email) => dispatch(emailAction(email)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
