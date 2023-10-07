import axios from 'axios';

const BACKEND_URL = 'https://dpg.gg/test/calendar.json';
export const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        throw error;
      }
    }
  );

  return api;
};

export const api = createAPI();
