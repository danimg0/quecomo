export interface UserDto {
  _id: string;
  username: string;
  email: string;
  imageUrl: string;
  favorites: string[];
}

// Respuesta del backend en /auth/login y /auth/register
export interface AuthResponseDto {
  token: string;
  user: UserDto;
}
