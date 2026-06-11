import { useFavorites } from '@/hooks/recipes/useFavorites';
import { Colors } from '@/utils/constants';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import ThemedButton from '../common/ThemedButton';
import ThemedSpinner from '../common/ThemedSpinner';
import ThemedText from '../common/ThemedText';
import FavoriteCard from './FavoriteCard';

const FavoritesDisplay = () => {
  const { favorites, isLoading, isError, isRefetching, refetch } =
    useFavorites();

  if (isLoading) {
    return <ThemedSpinner className="mt-10" />;
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center gap-4 px-10">
        <Ionicons name="cloud-offline-outline" size={48} color={Colors.muted} />
        <ThemedText className="text-center text-gray-500 dark:text-gray-400">
          No se pudieron cargar tus favoritos. Revisa tu conexión.
        </ThemedText>
        <ThemedButton
          color="primary"
          variant="contained"
          onPress={() => refetch()}
        >
          Reintentar
        </ThemedButton>
      </View>
    );
  }

  if (favorites.length === 0) {
    return (
      <View className="flex-1 items-center justify-center gap-4 px-8 pt-20">
        <Ionicons name="heart-outline" size={56} color={Colors.muted} />
        <ThemedText className="text-center text-gray-500 dark:text-gray-400">
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
      refreshControl={
        <RefreshControl
          refreshing={isRefetching}
          onRefresh={() => refetch()}
          tintColor={Colors.primary}
          colors={[Colors.primary]}
        />
      }
    />
  );
};

export default FavoritesDisplay;
