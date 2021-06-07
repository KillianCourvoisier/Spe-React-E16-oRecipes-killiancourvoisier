import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';

import { userInputChange, userLogin, userLogout } from 'src/actions/userActions';

const mapStateToProps = (state) => {
  const {
    email, password, isLogged, loggedMessage,
  } = state.user;
  return {
    email,
    password,
    isLogged,
    loggedMessage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (valeur, name) => {
    const data = { [name]: valeur };
    const action = userInputChange(data, dispatch);
    dispatch(action);
  },
  handleLogin: () => {
    const action = userLogin();
    dispatch(action);
  },
  handleLogout: () => {
    const action = userLogout();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
