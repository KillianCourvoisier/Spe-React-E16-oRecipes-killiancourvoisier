import { USER_LOGIN_INPUT_CHANGE } from 'src/actions//userActions';

const initialState = {
  email: 'bouclierman@herocorp.io',
  password: 'jennifer',
  isLogged: false,
  loggedMessage: 'Welcome John',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
