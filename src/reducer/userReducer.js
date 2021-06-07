import { USER_LOGIN_INPUT_CHANGE } from 'src/actions//userActions';

const initialState = {
  email: 'toto@truc.com',
  password: 'truc',
  isLogged: false,
  loggedMessage: 'Welcome toto',
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
