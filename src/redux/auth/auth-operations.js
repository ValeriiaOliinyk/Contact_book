import axios from 'axios';
// import authActions from './auth-actions';

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => dispatch => {};

const logIn = credentials => dispatch => {};

const logOut = credentials => dispatch => {};

const getCurrentUser = (dispatch, getState) => {};

export default { register, logOut, logIn, getCurrentUser };
