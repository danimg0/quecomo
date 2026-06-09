import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_TOKEN_KEY, queComoApi } from '@/api/axios.config';
import { AuthResponseDto } from '../dtos/user.dto';
import { mapUserDtoToEntity } from '../mappers/user.mapper';

export const login = async (email: string, password: string) => {
  const { data } = await queComoApi.post<AuthResponseDto>('/auth/login', {
    email,
    password,
  });

  // Guardamos el Bearer token; el interceptor de Axios lo añadirá en cada petición.
  await AsyncStorage.setItem(AUTH_TOKEN_KEY, data.token);

  return mapUserDtoToEntity(data.user);
};

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  const { data } = await queComoApi.post<AuthResponseDto>('/auth/register', {
    username,
    email,
    password,
  });

  await AsyncStorage.setItem(AUTH_TOKEN_KEY, data.token);

  return mapUserDtoToEntity(data.user);
};
