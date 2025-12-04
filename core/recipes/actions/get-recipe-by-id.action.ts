import { queComoApi } from '@/api/axios.config';
import { RecipeDto } from '../dtos/recipe.dto';
import { mapBackendRecipeToFrontend } from '../mappers/recipe.mapper';

export const getRecipeById = async (id: string) => {
  try {
    const { data } = await queComoApi.get<RecipeDto>(`/recipe/${id}`);

    return mapBackendRecipeToFrontend(data);
  } catch (error) {
    console.log('error', error);
  }
};
