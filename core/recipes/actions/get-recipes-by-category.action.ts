import { queComoApi } from '@/api/axios.config';
import { RecipeDto } from '../dtos/recipe.dto';
import { mapBackendRecipeToFrontend } from '../mappers/recipe.mapper';

export const getRecipesByCategory = async (
  categoryId: string,
  page: number = 0,
  limit: number = 10
) => {
  try {
    const { data } = await queComoApi.get<RecipeDto[]>(
      `/recipes/category/${categoryId}?page=${page}&limit=${limit}`
    );

    const recipes = data.map((recipeDto) =>
      mapBackendRecipeToFrontend(recipeDto)
    );

    return recipes;
  } catch (error) {
    console.log('Error en action', error);
  }
};
