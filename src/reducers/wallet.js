const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.expenseData],
    };
  case 'TOTAL_EXPENSE':
  return {
    ...state,
    totalExpenses: [action.totalExpenses],
  };
  case 'GET_PRICE':
    // Filtra apenas a key do retorno da API e adiciona ela na chave 'currencies' do estado
    const currencyArray = Object.keys(action.data);
    const filteredCurrencies = currencyArray.filter((currency) => currency !== 'USDT' )
    return {
      ...state,
      currencies: filteredCurrencies,
    }
  default:
    return state;
  }
};

export default walletReducer;
