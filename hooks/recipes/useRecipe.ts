import { getRecipeById } from '@/core/recipes/actions/get-recipe-by-id.action';
import { Recipe } from '@/core/recipes/domain/recipe.entity';
import { useQuery } from '@tanstack/react-query';

export const useRecipe = (id?: string, initialData?: Recipe) => {
  //   const queryClient = useQueryClient();

  const recipeQuery = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => {
      //En el futuro, si no hay id, es porque se crea la receta
      if (id) {
        const recipe = getRecipeById(id);
        return recipe;
      }
    },

    // Si el componente pasa los datos, los usamos, si no, sera undefined y cargara el servidor
    initialData: initialData,
    staleTime: 1000 * 60 * 60,

    // Buscar en la caché de la lista ('recipes', 'infinite')
    // Me pierdo la verda xd
    // initialData: () => {
    //   //Buscamos en todas las queries que ahn hecho uso de recipes
    //   const allQueries = queryClient.getQueriesData({ queryKey: ['recipes'] });
    //   for (const [key, data] of allQueries) {
    //     //Data es de tipo infinitydata, tiene pages
    //     const found = (data as any)?.pages
    //       ?.flat()
    //       .find((r: Recipe) => r.id === id);
    //     if (found) return found;
    //   }
    //   return undefined;
    // },
  });
  return {
    useRecipe,

    recipe: recipeQuery.data,
  };
};
