import LoginRequired from '@/components/common/LoginRequired';
import ThemedView from '@/components/common/ThemedView';
import FavoritesDisplay from '@/components/recipe/FavoritesDisplay';
import { useAuth } from '@/hooks/auth/useAuth';
import React from 'react';

const FavoriteScreen = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <LoginRequired message="Inicia sesión para guardar y ver tus recetas favoritas" />
    );
  }

  return (
    <ThemedView marginHorizontal className="mt-4">
      <FavoritesDisplay />
    </ThemedView>
  );
};

export default FavoriteScreen;
