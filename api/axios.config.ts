import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Clave bajo la que se guarda el Bearer token en el almacenamiento del dispositivo
export const AUTH_TOKEN_KEY = 'auth-token';

// Backend en producción (Railway). Para desarrollar contra el backend local,
// comenta esta línea y descomenta la de abajo con tu IP de la red local.
const API_URL = 'https://quecomobackend-production.up.railway.app';
// const API_URL = 'http://192.168.1.135:8080';

export const queComoApi = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor: antes de cada petición, añade el token al header Authorization si existe.
// Lee de AsyncStorage para que funcione también tras reiniciar la app.
queComoApi.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
