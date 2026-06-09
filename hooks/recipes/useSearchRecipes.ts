import {
  SearchFilters,
  searchRecipes,
} from '@/core/recipes/actions/search-recipes.action';
import { useQuery } from '@tanstack/react-query';

export const useSearchRecipes = (filters: SearchFilters) => {
  const searchQuery = useQuery({
    queryKey: ['search', filters],
    queryFn: () => searchRecipes(filters),
    staleTime: 1000 * 60 * 5,
  });

  return {
    recipes: searchQuery.data ?? [],
    isLoading: searchQuery.isLoading,
    isError: searchQuery.isError,
  };
};
