import { useFavorites } from '@/hooks/recipes/useFavorites';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import ThemedText from '../common/ThemedText';
import FavoriteCard from './FavoriteCard';

const FavoritesDisplay = () => {
  const { favorites, isLoading } = useFavorites();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#f97316" className="mt-10" />;
  }

  if (favorites.length === 0) {
    return (
      <View className="flex-1 items-center justify-center gap-4 px-8 pt-20">
        <Ionicons name="heart-outline" size={56} color="#9CA3AF" />
        <ThemedText className="text-center text-gray-500">
          Aún no tienes recetas favoritas. Pulsa el corazón en una receta para
          guardarla aquí.
        </ThemedText>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FavoriteCard recipe={item} />}
      ItemSeparatorComponent={() => <View className="h-3" />}
    />
  );
};

export default FavoritesDisplay;
