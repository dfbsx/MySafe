import axios from 'axios';
import API_URL  from './config';

export const createMessage = (data) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/message/create`,
    data:data,
  })
};