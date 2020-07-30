import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());
  axios
    .post('/users/signup', credentials)
    .then(response => dispatch(authActions.registerSuccess(response.data)))
    .catch(error => dispatch(authActions.registerError(error)));
};

const logIn = credentials => dispatch => {};

const logOut = credentials => dispatch => {};

const getCurrentUser = (dispatch, getState) => {};

export default { register, logOut, logIn, getCurrentUser };
