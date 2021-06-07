export const USER_LOGIN_INPUT_CHANGE = 'USER_LOGIN_INPUT_CHANGE';
export const USER_HANDLE_LOGIN = 'USER_HANDLE_LOGIN';
export const USER_HANDLE_LOGOUT = 'USER_HANDLE_LOGOUT';

export const userInputChange = (payload) => ({
  type: USER_LOGIN_INPUT_CHANGE,
  payload,
});

export const userLogin = () => ({
  type: USER_HANDLE_LOGIN,
});

export const userLogout = () => ({
  type: USER_HANDLE_LOGOUT,
});
