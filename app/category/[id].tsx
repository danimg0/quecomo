import ThemedText from '@/components/common/ThemedText';
import ThemedView from '@/components/common/ThemedView';
import FeaturedCardRecipe from '@/components/recipe/FeaturedCardRecipe';
import { useRecipes } from '@/hooks/recipes/useRecipes';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList } from 'react-native';

const CategoryScreen = () => {
  const { id } = useLocalSearchParams();

  const { recipes } = useRecipes(id as string);

  return (
    <ThemedView safe>
      <ThemedText variant="h1" className="p-4">
        {/* {catName} */}
        Categoria
      </ThemedText>
      {!recipes ? (
        <ThemedText>No hay recetas en esta categoria</ThemedText>
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
