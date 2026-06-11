import ThemedButton from '@/components/common/ThemedButton';
import ThemedSpinner from '@/components/common/ThemedSpinner';
import ThemedText from '@/components/common/ThemedText';
import ThemedView from '@/components/common/ThemedView';
import FeaturedCardRecipe from '@/components/recipe/FeaturedCardRecipe';
import { SearchFilters } from '@/core/recipes/actions/search-recipes.action';
import { useSearchRecipes } from '@/hooks/recipes/useSearchRecipes';
import { Colors } from '@/utils/constants';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList, View } from 'react-native';

const SearchResults = () => {
  const { title, minDuration, maxDuration, difficulty } =
    useLocalSearchParams<{
      title?: string;
      minDuration?: string;
      maxDuration?: string;
      difficulty?: string;
    }>();

  const filters: SearchFilters = {
    title,
    minDuration: minDuration ? Number(minDuration) : undefined,
    maxDuration: maxDuration ? Number(maxDuration) : undefined,
    difficulty: difficulty as SearchFilters['difficulty'],
  };

  const { recipes, isLoading, isError, refetch } = useSearchRecipes(filters);

  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Resultados' }} />
      <ThemedView safe>
        {isLoading ? (
          <ThemedSpinner className="mt-10" />
        ) : isError ? (
          <View className="flex-1 items-center justify-center gap-4 px-10">
            <Ionicons
              name="cloud-offline-outline"
              size={48}
              color={Colors.muted}
            />
            <ThemedText className="text-center text-gray-500 dark:text-gray-400">
              Hubo un error al buscar. Revisa tu conexión.
            </ThemedText>
            <ThemedButton
              color="primary"
              variant="contained"
              onPress={() => refetch()}
            >
              Reintentar
            </ThemedButton>
          </View>
        ) : recipes.length === 0 ? (
          <ThemedText className="p-4 text-center text-gray-500 dark:text-gray-400">
            No se encontraron recetas con esos filtros.
          </ThemedText>
        ) : (
          <FlatList
            numColumns={2}
            data={recipes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <FeaturedCardRecipe recipe={item} />}
            contentContainerClassName="px-4 pt-4"
            columnWrapperClassName="justify-between pb-2"
          />
        )}
      </ThemedView>
    </>
  );
};

export default SearchResults;
