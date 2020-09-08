import axios from 'axios';

const login = (credentials) => {
  axios
    .post('http://localhost:3001/api/users/login', credentials)
    .then(({ data }) => {
      return 'test';
    })
    .catch((err) => {
      console.log('[Error]: ' + err.message);
      return 'error';
    });
};

export default login;
