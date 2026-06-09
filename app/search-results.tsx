import ThemedText from '@/components/common/ThemedText';
import ThemedView from '@/components/common/ThemedView';
import FeaturedCardRecipe from '@/components/recipe/FeaturedCardRecipe';
import { SearchFilters } from '@/core/recipes/actions/search-recipes.action';
import { useSearchRecipes } from '@/hooks/recipes/useSearchRecipes';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

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

  const { recipes, isLoading, isError } = useSearchRecipes(filters);

  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Resultados' }} />
      <ThemedView safe>
        {isLoading ? (
          <ActivityIndicator size="large" color="#f97316" className="mt-10" />
        ) : isError ? (
          <ThemedText className="p-4 text-center text-gray-500">
            Hubo un error al buscar. Inténtalo de nuevo.
          </ThemedText>
        ) : recipes.length === 0 ? (
          <ThemedText className="p-4 text-center text-gray-500">
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
