import { queComoApi } from '@/api/axios.config';

// PATCH /user/fav/:recipeId -> añade o quita la receta de favoritos (requiere Bearer token)
export const toggleFavorite = async (recipeId: string) => {
  const { data } = await queComoApi.patch<{ message: string }>(
    `/user/fav/${recipeId}`
  );
  return data;
};
