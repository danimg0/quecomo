import { getFavorites } from '@/core/recipes/actions/get-favorites.action';
import { toggleFavorite } from '@/core/recipes/actions/toggle-favorite';
import { Recipe } from '@/core/recipes/domain/recipe.entity';
import { useAuth } from '@/hooks/auth/useAuth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useFavorites = () => {
  const { isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  // Lista de recetas favoritas. Solo se pide si el usuario está logueado.
  const favoritesQuery = useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites,
    enabled: isAuthenticated,
    staleTime: 1000 * 60 * 5,
  });

  // Toggle OPTIMISTA: la UI cambia al instante sin esperar al backend.
  // Recibe la receta completa para poder añadirla a la caché directamente.
  const toggleMutation = useMutation({
    mutationFn: (recipe: Recipe) => toggleFavorite(recipe.id),

    onMutate: async (recipe) => {
      // 1. Cancelar peticiones en vuelo para que no pisen nuestro cambio
      await queryClient.cancelQueries({ queryKey: ['favorites'] });

      // 2. Snapshot del estado actual (por si hay que volver atrás)
      const previous = queryClient.getQueryData<Recipe[]>(['favorites']);

      // 3. Actualizar la caché YA: añadir o quitar la receta
      queryClient.setQueryData<Recipe[]>(['favorites'], (old = []) =>
        old.some((r) => r.id === recipe.id)
          ? old.filter((r) => r.id !== recipe.id)
          : [...old, recipe]
      );

      return { previous };
    },

    // 4. Si el backend falla, rollback al estado real
    onError: (_error, _recipe, context) => {
      if (context?.previous) {
        queryClient.setQueryData(['favorites'], context.previous);
      }
    },

    // 5. Al terminar (bien o mal), re-sincronizar con el backend
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });

  const favorites = favoritesQuery.data ?? [];

  const isFavorite = (recipeId: string) =>
    favorites.some((recipe) => recipe.id === recipeId);

  return {
    favorites,
    isLoading: favoritesQuery.isLoading,
    isError: favoritesQuery.isError,
    isRefetching: favoritesQuery.isRefetching,
    refetch: favoritesQuery.refetch,
    isFavorite,
    toggleFavorite: toggleMutation.mutate,
    isToggling: toggleMutation.isPending,
  };
};
