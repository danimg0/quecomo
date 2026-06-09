import { User } from '../domain/user.entity';
import { UserDto } from '../dtos/user.dto';

export const mapUserDtoToEntity = (user: UserDto): User => {
  return {
    id: user._id,
    username: user.username,
    email: user.email,
    imageUrl: user.imageUrl,
    favorites: user.favorites,
  };
};
