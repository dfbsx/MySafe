import axios from 'axios';
import API_URL  from './config';

export const getSingleMessage = (messageId) => {
  return axios({
    method: 'GET',
    url: `${API_URL}/message/get/${messageId}`,
  })
};