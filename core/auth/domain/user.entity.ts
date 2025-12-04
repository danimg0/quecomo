export interface User {
  id: string;
  username: string;
  imageUrl: string;
  email: string;
  favorites: string[];
  sessionToken: string;
}

// Esta es la respuesta completa del backend al hacer login
// (A veces el backend devuelve { user: ..., token: ... })
export interface AuthResponse {
  user: User;
  message: string;
}
