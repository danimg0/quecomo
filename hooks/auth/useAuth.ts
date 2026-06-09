import { useAuthStore } from '@/core/auth/store/auth.store';

export const useAuth = () => {
  const status = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const errorMessage = useAuthStore((state) => state.errorMessage);

  const login = useAuthStore((state) => state.login);
  const register = useAuthStore((state) => state.register);
  const logout = useAuthStore((state) => state.logout);
  const deleteAccount = useAuthStore((state) => state.deleteAccount);

  return {
    //Estado
    status,
    user,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'checking',
    errorMessage,

    //Acciones
    login,
    register,
    logout,
    deleteAccount,
  };
};
