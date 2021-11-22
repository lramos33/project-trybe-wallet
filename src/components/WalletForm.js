import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './subcomponents/Input';
import Select from './subcomponents/Select';
import { expenseAction } from '../actions';

class WalletForm extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.createObjectToDispatch = this.createObjectToDispatch.bind(this);

    this.state = {
      id: 0,
      value: '',
      currency: '',
      description: '',
      // Definido uns state inicial por conta do default select
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onButtonClick() {
    const { expenseDispatch } = this.props;
    const expenseData = this.createObjectToDispatch();
    expenseDispatch(expenseData);

    this.setState((prevState) => ({
      ...prevState,
      id: prevState.id + 1,
    }));
  }

  createObjectToDispatch() {
    const { id, value, currency, method, tag, description } = this.state;
    return {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: {},
    };
  }

  // Functions to render
  paragraphInput() {
    return (
      <Input
        classParagraph="wallet-form-paragraph"
        classInput="wallet-form-input-value"
        classLabel="wallet-form-label"
        type="number"
        name="value"
        labelName="Valor:"
        testid="value-input"
        onChange={ this.onInputChange }
      />
    );
  }

  currencySelect() {
    const currencyData = [];
    return (
      <Select
        classParagraph="wallet-form-paragraph"
        classSelect="wallet-form-select-currency"
        classLabel="wallet-form-label"
        name="currency"
        data={ currencyData }
        testid="currency-input"
        labelName="Moeda:"
        onChange={ this.onInputChange }
      />
    );
  }

  methodSelect() {
    const methodData = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <Select
        classParagraph="wallet-form-paragraph"
        classSelect="wallet-form-select-method"
        classLabel="wallet-form-label"
        name="method"
        data={ methodData }
        testid="method-input"
        labelName="Método de pagamento:"
        onChange={ this.onInputChange }
      />
    );
  }

  tagSelect() {
    const tagData = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <Select
        classParagraph="wallet-form-paragraph"
        classSelect="wallet-form-select-tag"
        classLabel="wallet-form-label"
        name="tag"
        data={ tagData }
        testid="tag-input"
        labelName="Tag:"
        onChange={ this.onInputChange }
      />
    );
  }

  descriptionInput() {
    return (
      <Input
        classParagraph="wallet-form-paragraph"
        classInput="wallet-form-input-description"
        classLabel="wallet-form-label"
        type="text"
        name="description"
        labelName="Descrição:"
        testid="description-input"
        onChange={ this.onInputChange }
      />
    );
  }

  render() {
    return (
      <div className="wallet-form">
        { this.paragraphInput() }
        { this.currencySelect() }
        { this.methodSelect() }
        { this.tagSelect() }
        { this.descriptionInput() }
        <button
          className="wallet-form-button"
          type="button"
          onClick={ this.onButtonClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expenseDispatch: (expenseData) => dispatch(expenseAction(expenseData)),
});

WalletForm.propTypes = {
  expenseDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WalletForm);
