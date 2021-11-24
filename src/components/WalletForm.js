import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './subcomponents/Input';
import Select from './subcomponents/Select';
import { expenseAction, fetchAPI } from '../actions';

class WalletForm extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.createObjectToDispatch = this.createObjectToDispatch.bind(this);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      totalExpense: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  // Monta o array currencies para ser utilizado no select
  async componentDidMount() {
    const { priceDispatch } = this.props;
    await priceDispatch();
  }

  // Função padrão de input change
  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // Despacha a despesa para o estado global, atualiza o id e volta para estado inicial do componente
  async onButtonClick() {
    const { expenseDispatch } = this.props;
    const expenseData = await this.createObjectToDispatch();
    expenseDispatch(expenseData);
    this.setState((prevState) => ({
      ...prevState,
      value: 0,
      description: '',
      id: prevState.id + 1,
    }));
  }

  // Retorna um objeto no formato correto para o dispatch
  async createObjectToDispatch() {
    const { id, value, currency, method, tag, description } = this.state;
    const { priceDispatch } = this.props;
    const responseAPI = await priceDispatch();
    const { data } = responseAPI;
    return {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: data,
    };
  }

  // ALL FUNCTIONS TO RENDER
  valueInput() {
    const { value } = this.state;
    return (
      <Input
        classParagraph="wallet-form-paragraph"
        classInput="wallet-form-input-value"
        classLabel="wallet-form-label"
        value={ value }
        type="number"
        name="value"
        labelName="Valor:"
        testid="value-input"
        onChange={ this.onInputChange }
      />
    );
  }

  currencySelect() {
    const { currencies } = this.props;
    return (
      <Select
        classParagraph="wallet-form-paragraph"
        classSelect="wallet-form-select-currency"
        classLabel="wallet-form-label"
        name="currency"
        data={ currencies }
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
    const { description } = this.state;
    return (
      <Input
        classParagraph="wallet-form-paragraph"
        classInput="wallet-form-input-description"
        classLabel="wallet-form-label"
        value={ description }
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
        { this.valueInput() }
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

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  expenseDispatch: (expenseData) => dispatch(expenseAction(expenseData)),
  priceDispatch: () => dispatch((fetchAPI())),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenseDispatch: PropTypes.func.isRequired,
  priceDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
