import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { login, register } from '../actions/auth.actions';
import { User } from '../domain/user.entity';

// Se define lo que contien este estado y que hace
interface AuthState {
  //Estado
  user: User | null;
  status: 'checking' | 'authenticated' | 'unauthenticated';
  errorMessage: string | null;

  //Acciones
  login: (email: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

// 2. Creamos el store
export const useAuthStore = create<AuthState>()(
  // Usamos 'persist' para que no se borre al cerrar la app
  persist(
    (set) => ({
      user: null,
      status: 'unauthenticated',
      errorMessage: null,

      login: async (email, password) => {
        try {
          set({ status: 'checking', errorMessage: null }); // 1. Ponemos estado de carga

          const user = await login(email, password); // 2. Llamamos a Axios

          set({ status: 'authenticated', user: user, errorMessage: null }); // 3. ¡Éxito!
          //todo tipar el error y mandar siempre un message desde el backend
        } catch (error: any) {
          const errorMessage =
            error.response?.data?.message || 'Usuario o contraseña incorrectos';
          set({
            status: 'unauthenticated',
            user: null,
            errorMessage,
          });
        }
      },

      register: async (username, email, password) => {
        try {
          set({ status: 'checking', errorMessage: null });
          const user = await register(username, email, password);
          set({ status: 'authenticated', user: user, errorMessage: null });
        } catch (error) {
          set({
            status: 'unauthenticated',
            errorMessage: 'No se pudo crear la cuenta',
          });
        }
      },

      logout: () => {
        set({ status: 'unauthenticated', user: null, errorMessage: null });
        // Aquí podrías llamar a una acción de logout del backend si quisieras borrar la cookie
      },

      clearError: () => set({ errorMessage: null }),
    }),
    {
      name: 'auth-storage', // Nombre clave para guardar en el móvil
      storage: createJSONStorage(() => AsyncStorage), // Usamos el storage nativo
    }
  )
);
