import { MOCK_RECIPES } from '@/utils/mock-data';
import React from 'react';
import { View } from 'react-native';
import FeaturedCardRecipe from '../common/FeaturedCardRecipe';
import ThemedText from '../themed/ThemedText';

const FeaturedRecipes = () => {
  const featuredRecipesData = MOCK_RECIPES;

  return (
    <View>
      <ThemedText variant="h1" className="ml-4 mb-4">
        ¿Qué pongo de comer?
      </ThemedText>
      <View className="h-fit w-full flex flex-row flex-wrap justify-between px-4 gap-x-4 ">
        {/* COMPONENTE RECETA DESTACADA - TEMATIZADO */}
        {featuredRecipesData.map((recipe) => (
          <View key={recipe.id} className="pb-2">
            <FeaturedCardRecipe recipe={recipe} />
          </View>
        ))}
        {/* <FlatList
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          data={featuredRecipesData}
          renderItem={({ item }) => <FeaturedCardRecipe recipe={item} />}
          contentContainerClassName="px-4"
          columnWrapperClassName="justify-between pb-2"

          // contentContainerStyle={{ paddingHorizontal: 16}}
        /> */}
      </View>
    </View>
  );
};

export default FeaturedRecipes;
