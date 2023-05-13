import axios from 'axios';
import API_URL  from './config';

export const register = (data) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/user/registration`,
    data:data,
  })
};