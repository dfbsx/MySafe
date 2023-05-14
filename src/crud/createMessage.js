import axios from 'axios';
import API_URL  from './config';

export const createMessage = (title,text) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/message/create`,
    data:{ "subject" : title, "body": text, "encryption_method": "AES" },
  })
};