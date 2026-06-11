import { getRecipeById } from '@/core/recipes/actions/get-recipe-by-id.action';
import { Recipe } from '@/core/recipes/domain/recipe.entity';
import { useQuery } from '@tanstack/react-query';

export const useRecipe = (id?: string, initialData?: Recipe) => {
  const recipeQuery = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => getRecipeById(id!),
    // Sin id no se lanza la petición
    enabled: !!id,

    // Si el componente pasa los datos (navegación desde una lista), los usamos
    // y nos ahorramos la petición; si no, carga del servidor.
    initialData: initialData,
    staleTime: 1000 * 60 * 60,
  });

  return {
    recipe: recipeQuery.data,
    isLoading: recipeQuery.isLoading,
    isError: recipeQuery.isError,
  };
};
