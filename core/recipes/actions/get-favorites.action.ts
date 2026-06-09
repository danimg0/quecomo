import { queComoApi } from '@/api/axios.config';
import { RecipeDto } from '../dtos/recipe.dto';
import { mapBackendRecipeToFrontend } from '../mappers/recipe.mapper';

// GET /user/favs -> recetas favoritas del usuario logueado (requiere Bearer token)
export const getFavorites = async () => {
  const { data } = await queComoApi.get<RecipeDto[]>('/user/favs');
  return data.map((dto) => mapBackendRecipeToFrontend(dto));
};
