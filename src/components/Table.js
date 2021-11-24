import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';
import { deleteExpense } from '../actions';

class Table extends Component {
  tableLineGenerator(expense) {
    const { id, value, description, currency, method, tag, exchangeRates } = expense;
    const { deleteDispatch } = this.props;
    return (
      <tr className="table-line" key={ id }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ exchangeRates[currency].name.split('/')[0] }</td>
        <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
        <td>{ Number(exchangeRates[currency].ask * value).toFixed(2) }</td>
        <td>Real</td>
        <td>
          <FiTrash2
            data-testid="delete-btn"
            onClick={ () => deleteDispatch(id) }
          />
        </td>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className="full-table">
        <thead>
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
        </thead>
        <tbody>
          { expenses.map((expense) => this.tableLineGenerator(expense)) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (id) => dispatch(deleteExpense(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
