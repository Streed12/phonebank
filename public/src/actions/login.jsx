import axios from 'axios';
import { CLEAR_AUTH, SET_AUTH_JWT_FULFILLED, LOGOUT_USER } from '../reducers/login';
import { fetchUser } from './account_info';

export function setUserAuthCredentials(user) {
  return {
    type: SET_AUTH_JWT_FULFILLED,
    payload: user
  };
}

export function clearAuthCredentials() {
  return {
    type: CLEAR_AUTH
  };
}

export function logout() {
  return {
    type: LOGOUT_USER
  };
}

export function loginUser( { email, password }, history) {
  return dispatch => axios.post('/auth/login', {
    email,
    password
  })
  .then(({ data }) => {
    const { token, id } = data;
    localStorage.setItem('auth_token', token);
    Promise.all([dispatch(setUserAuthCredentials(data)),
      dispatch(fetchUser(id))]
    )
    .then(() => history.push('/'));
  })
  .catch((err) => {
    const customError = {
      message: `error fetching user info in account_info action fetchUserInfo: ${err}`,
      name: 'user info post request from account_info component'
    };
    throw customError;
  });
}

export function logoutUser(userInfo, history) {
  return dispatch => axios.get('/logout')
  .then(() => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('status');
    dispatch(logout());
    history.push('/login');
  })
  .catch((err) => {
    const customError = {
      message: `error with user logout: ${err}`,
      name: 'logoutUser function error'
    };
    throw customError;
  });
}

export function authTransition(storeInstance) {
  const { auth: { id } } = storeInstance.getState();
  const token = localStorage.getItem('auth_token');
  return !!id && !!token;
}
