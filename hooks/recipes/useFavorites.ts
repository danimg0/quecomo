import { getFavorites } from '@/core/recipes/actions/get-favorites.action';
import { toggleFavorite } from '@/core/recipes/actions/toggle-favorite';
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

  // Añadir/quitar de favoritos; al terminar refresca la lista
  const toggleMutation = useMutation({
    mutationFn: (recipeId: string) => toggleFavorite(recipeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });

  const favorites = favoritesQuery.data ?? [];

  const isFavorite = (recipeId: string) =>
    favorites.some((recipe) => recipe.id === recipeId);

  return {
    favorites,
    isLoading: favoritesQuery.isLoading,
    isFavorite,
    toggleFavorite: toggleMutation.mutate,
    isToggling: toggleMutation.isPending,
  };
};
