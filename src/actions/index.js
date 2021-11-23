export const emailAction = (email) => ({ type: 'EMAIL', email });
export const expenseAction = (expenseData) => ({ type: 'EXPENSE', expenseData });

export const requestAPI = () => ({ type: 'REQUEST_API' });
export const getPrice = (data) => ({ type: 'GET_PRICE', data });
export const fetchAPI= () => {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(getPrice(data)));
  }
}