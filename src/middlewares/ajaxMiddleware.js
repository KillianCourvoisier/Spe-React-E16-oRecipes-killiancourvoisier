import axios from 'axios';
import { USER_HANDLE_LOGIN } from 'src/actions/userActions';

export default (store) => (next) => async (action) => {
  console.log(action);
  switch (action.type) {
    case USER_HANDLE_LOGIN: {
      const { email, password } = store.getState().user;
      try {
        const response = await axios({
          url: 'http://localhost:3001/login',
          method: 'post',
          data: {
            email, password,
          },
        });
        console.log(response.data);
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    default:
      return next(action);
  }
};
