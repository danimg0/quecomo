import axios from 'axios';

// const backendLocal = '192.168.246.1';

export const queComoApi = axios.create({
  baseURL: `http://192.168.1.148:8080`,
  withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
