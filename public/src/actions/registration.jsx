import axios from 'axios';

export default function registerNewUser(userInfo, history) {
  // route that was previously known as '/users'
  return () => axios.post('/auth/register', {
    ...userInfo
  })
  .then((res) => {
    history.push('/login');
    return res;
  })
  .catch((err) => {
    const customError = {
      message: `error in posting new user to db: ${err}`,
      name: 'registerNewUser function error in registration.js'
    };
    throw customError;
  });
}
