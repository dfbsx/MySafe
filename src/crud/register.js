import axios from 'axios';
import API_URL  from './config';

export const register = (login, password, repeatedPassword) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/user/registration`,
    data:{ "username" : login, "password": password, "password2": repeatedPassword },
  })
};