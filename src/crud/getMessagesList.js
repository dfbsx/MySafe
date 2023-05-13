import axios from 'axios';
import API_URL  from './config';

export const getMessagesList = () => {
  return axios({
    method: 'GET',
    url: `${API_URL}/message/list`,
  })
};