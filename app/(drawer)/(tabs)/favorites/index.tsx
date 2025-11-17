import FavoritesDisplay from '@/components/recipe/FavoritesDisplay';
import ThemedView from '@/components/themed/ThemedView';
import React from 'react';

const FavoriteScreen = () => {
  return (
    <ThemedView marginHorizontal className="mt-4">
      <FavoritesDisplay />
    </ThemedView>
  );
};

export default FavoriteScreen;
