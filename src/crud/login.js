import axios from 'axios';
import API_URL  from './config';

export const login = (login, password) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/user/login`,
    data:{ "username" : login, "password": password },
  })
};