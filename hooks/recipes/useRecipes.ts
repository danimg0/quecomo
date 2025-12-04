import { getRecipesByCategory } from '@/core/recipes/actions/get-recipes-by-category.action';
import { getAllRecipes } from '@/core/recipes/actions/get-recipes.action';
import { Recipe } from '@/core/recipes/domain/recipe.entity';
import { useInfiniteQuery } from '@tanstack/react-query';

//Comienza el hook
export const useRecipes = (categoryId?: string) => {
  const recipesQuery = useInfiniteQuery({
    queryKey: ['recipes', 'infinite', categoryId], // claves para las cookies

    initialPageParam: 0, // Comenzamos en 0

    // queryFn recibe ya el pageParam automaticamente
    queryFn: async ({ pageParam }) => {
      console.log('DEBUG llamando a useRecipes en recipesQuery');

      let recipes: Recipe[] | undefined = [];
      if (!categoryId) {
        recipes = await getAllRecipes(pageParam, 6);
      } else {
        console.log('DEBUG Llamando por categoria');

        recipes = await getRecipesByCategory(categoryId);
      }

      return recipes;
    },

    // Funcion para calcular cual es la siguiente pagina
    getNextPageParam: (lastPage, allPages) => {
      // Si la ultima pagina esta vacia, stop

      if (!lastPage || lastPage.length === 0) return undefined;

      // Si no, la siguiente pagina es el numero de paginas que ya tenemos
      return allPages.length;
    },

    // Hacer que a las 00 se fuerce el cambio
    staleTime: 1000 * 60 * 60, // 1 Hora
  });

  return {
    recipesQuery,

    //Propiedad calculada. Unimos todas las pags en un array gigante
    //data.pages es [[10 recetas], [10 recetas]]. el .flat() lo hace [20 recetas]
    recipes: recipesQuery.data?.pages.flat() || [],

    // funcion para pedir mas
    loadNextPage: recipesQuery.fetchNextPage,
  };
};
