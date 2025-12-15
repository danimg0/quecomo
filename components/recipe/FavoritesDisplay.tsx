import { useAuth } from '@/hooks/auth/useAuth';
import { useRecipe } from '@/hooks/recipes/useRecipe';
import React from 'react';
import { View } from 'react-native';
import FavoriteCard from './FavoriteCard';

// const favData = MOCK_RECIPES.filter((recipe) => recipe.favorite);

const FavoritesDisplay = () => {
  const { user } = useAuth();
  const { recipe } = useRecipe(user?.favorites);

  return (
    <View className="flex gap-y-4">
      {favData.map((recipe) => (
        <FavoriteCard key={recipe.id} recipe={recipe} />
      ))}
    </View>
  );
};

export default FavoritesDisplay;
