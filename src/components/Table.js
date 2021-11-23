import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  tableLineGenerator(expense) {
    const { value, description, currency, method, tag, exchangeRates } = expense;
    return (
      <tr className="table-line">
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ exchangeRates[currency].name.split('/')[0] }</td>
        <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
        <td>{ Number(exchangeRates[currency].ask * value).toFixed(2) }</td>
        <td>Real</td>
        <td>...</td>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className="full-table">
        <tr className="table-head">
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        { expenses.map((expense) => this.tableLineGenerator(expense)) }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Table);
