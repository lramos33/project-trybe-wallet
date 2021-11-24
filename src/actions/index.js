export const emailAction = (value) => ({ type: 'EMAIL', value });
export const expenseAction = (value) => ({ type: 'EXPENSE', value });
export const requestAPI = () => ({ type: 'REQUEST_API' });
export const getPrice = (data) => ({ type: 'GET_PRICE', data });
export const deleteExpense = (id) => ({ type: 'DELETE_EXPENSE', id });

export const fetchAPI = () => (dispatch) => {
  dispatch(requestAPI());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(getPrice(data)));
};
