import { queComoApi } from '@/api/axios.config';

// DELETE /user -> borra la cuenta del usuario autenticado (Bearer token)
export const deleteAccount = async () => {
  const { data } = await queComoApi.delete<{ message: string }>('/user');
  return data;
};
