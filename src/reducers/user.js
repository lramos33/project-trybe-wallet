const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'EMAIL':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default userReducer;
