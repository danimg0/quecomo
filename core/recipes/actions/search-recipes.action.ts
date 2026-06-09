import { queComoApi } from '@/api/axios.config';
import { RecipeDto } from '../dtos/recipe.dto';
import { mapBackendRecipeToFrontend } from '../mappers/recipe.mapper';

export interface SearchFilters {
  title?: string;
  minDuration?: number;
  maxDuration?: number;
  difficulty?: 'EASY' | 'MEDIUM' | 'HARD';
}

// GET /recipes/search?title=&minDuration=&maxDuration=&difficulty=
export const searchRecipes = async (filters: SearchFilters) => {
  const params: Record<string, string | number> = {};
  if (filters.title) params.title = filters.title;
  if (filters.minDuration) params.minDuration = filters.minDuration;
  if (filters.maxDuration) params.maxDuration = filters.maxDuration;
  if (filters.difficulty) params.difficulty = filters.difficulty;

  const { data } = await queComoApi.get<RecipeDto[]>('/recipes/search', {
    params,
  });

  return data.map((dto) => mapBackendRecipeToFrontend(dto));
};
