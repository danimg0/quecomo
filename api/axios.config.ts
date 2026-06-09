import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Clave bajo la que se guarda el Bearer token en el almacenamiento del dispositivo
export const AUTH_TOKEN_KEY = 'auth-token';

// const backendLocal = '192.168.246.1';

export const queComoApi = axios.create({
  //baseURL: `http://192.168.1.148:8080`,
  baseURL: `http://192.168.1.135:8080`,
  timeout: 5000,
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
