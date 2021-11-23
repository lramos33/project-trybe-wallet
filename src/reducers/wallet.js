const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.expenseData],
    };
  case 'GET_PRICE': {
    // Filtra apenas a key do retorno da API e adiciona ela na chave 'currencies' do estado
    const currencyArray = Object.keys(action.data);
    const filteredCurrencies = currencyArray.filter((currency) => currency !== 'USDT');
    return {
      ...state,
      currencies: filteredCurrencies,
    };
  }
  default:
    return state;
  }
};

export default walletReducer;
