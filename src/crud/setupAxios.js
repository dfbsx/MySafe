import axios from 'axios';
import key from '../const'

const setupAxios = () => {
  axios.defaults.withCredentials = true
  axios.interceptors.request.use(
    (config) => {
      /*const token = JSON.parse(localStorage.getItem(key))?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }*/
      return config;
    },
    (err) => Promise.reject(err)
  );
};

export default setupAxios;
