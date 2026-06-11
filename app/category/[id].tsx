import ThemedSpinner from '@/components/common/ThemedSpinner';
import ThemedText from '@/components/common/ThemedText';
import ThemedView from '@/components/common/ThemedView';
import FeaturedCardRecipe from '@/components/recipe/FeaturedCardRecipe';
import { useRecipes } from '@/hooks/recipes/useRecipes';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList } from 'react-native';

const CategoryScreen = () => {
  // name llega desde CategoryCard para pintar el título sin otra petición
  const { id, name } = useLocalSearchParams<{ id: string; name?: string }>();

  const { recipes, recipesQuery } = useRecipes(id);

  return (
    <ThemedView safe>
      <ThemedText variant="h1" className="p-4">
        {name || 'Categoría'}
      </ThemedText>
      {recipesQuery.isLoading ? (
        <ThemedSpinner className="mt-10" />
      ) : recipes.length === 0 ? (
        <ThemedText className="px-4 text-gray-500 dark:text-gray-400">
          No hay recetas en esta categoría.
        </ThemedText>
      ) : (
        <FlatList
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          data={recipes}
          renderItem={({ item }) =>
            !item ? null : <FeaturedCardRecipe recipe={item} />
          }
          contentContainerClassName="px-4"
          columnWrapperClassName="justify-between pb-2"
        />
      )}
    </ThemedView>
  );
};

export default CategoryScreen;
