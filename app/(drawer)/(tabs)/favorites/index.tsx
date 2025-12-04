import ThemedView from '@/components/common/ThemedView';
import FavoritesDisplay from '@/components/recipe/FavoritesDisplay';
import React from 'react';

const FavoriteScreen = () => {
  return (
    <ThemedView marginHorizontal className="mt-4">
      <FavoritesDisplay />
    </ThemedView>
  );
};

export default FavoriteScreen;
