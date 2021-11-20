import React, { Component } from 'react';
import Input from '../components/Input';
import { connect } from 'react-redux';
import { emailAction } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
    this.checkInputs = this.checkInputs.bind(this);

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  checkInputs() {
    const { email, password } = this.state;
    const minLength = 6;
    const EMAIL_REGEX = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (EMAIL_REGEX.test(email) && password.length >= minLength);
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.setState({ isDisabled: !this.checkInputs() });
    });
  }

  onSubmitButtonClick() {
    const { history, loginComponentDispatch } = this.props
    const { email } = this.state;
    loginComponentDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <fieldset>
        <form>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            testid="email-input"
            onChange={ this.onInputChange }
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            testid="password-input"
            onChange={ this.onInputChange }
          />
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ this.onSubmitButtonClick }
          >
            Entrar
          </button>
        </form>
      </fieldset>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginComponentDispatch: (email) => dispatch(emailAction(email))
});

export default connect(null, mapDispatchToProps)(Login);
