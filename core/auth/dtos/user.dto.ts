export interface UserDto {
  _id: string;
  username: string;
  email: string;
  imageUrl: string;
  authentication: {
    password: string;
    salt: string;
    sessionToken: string;
  };
  favorites: string[];
}
