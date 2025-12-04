import { queComoApi } from '@/api/axios.config';
import { UserDto } from '../dtos/user.dto';
import { mapUserDtoToEntity } from '../mappers/user.mapper';

export const login = async (email: string, password: string) => {
  try {
    const { data } = await queComoApi.post<UserDto>('/auth/login', {
      email,
      password,
    });

    return mapUserDtoToEntity(data);
  } catch (error) {
    console.log(error);
    throw new Error('');
  }
};

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  //todo revisar lo que trae
  try {
    const { data } = await queComoApi.post('/auth/register', {
      username,
      email,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
