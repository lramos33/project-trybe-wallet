import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './subcomponents/Input';
import Select from './subcomponents/Select';
import { expenseAction } from '../actions';

class ExpenseForm extends Component {
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
    }
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onButtonClick() {
    const { expenseDispatch } = this.props;
    const expenseData = this.createObjectToDispatch();
    expenseDispatch(expenseData);

    this.setState(prevState => ({
      ...prevState,
      id: prevState.id + 1,
    }));
  }

  render() {
    const methodData = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const currencyData = [];
    const tagData = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <Input 
          type="number"
          name="value"
          labelName="Valor"
          testid="value-input"
          onChange={ this.onInputChange }
        />
        <Select 
          name="currency"
          data={ currencyData }
          testid="currency-input"
          labelName="Moeda"
          onChange={ this.onInputChange }
        />
        <Select 
          name="method"
          data={ methodData }
          testid="method-input"
          labelName="Método de pagamento"
          onChange={ this.onInputChange }
        />
        <Select 
          name="tag"
          data={ tagData }
          testid="tag-input"
          labelName="Tag"
          onChange={ this.onInputChange }
        />
        <Input 
          type="text"
          name="description"
          labelName="Descrição"
          testid="description-input"
          onChange={ this.onInputChange }
        />
        <button
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

ExpenseForm.propTypes = {
  expenseDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ExpenseForm);
