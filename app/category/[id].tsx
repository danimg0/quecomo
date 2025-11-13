import FeaturedCardRecipe from '@/components/common/FeaturedCardRecipe';
import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { MOCK_CAT_REC, MOCK_CATEGORIES, MOCK_RECIPES } from '@/utils/mock-data';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList } from 'react-native';

const CategoryScreen = () => {
  const { id } = useLocalSearchParams();
  const catData = MOCK_CAT_REC;

  //Cojo todos los id de las recetas de esa categoria
  const selectedCatData = catData.filter((data) => data.id_cat === id);
  //Cojo los id de las recetas que pertenecen a esta categoria
  const idRecipes = selectedCatData.map((selectedCat) => selectedCat.id_rec);
  //Cojo las recetas que tienen ese id
  const recipes = MOCK_RECIPES.filter((rec) => idRecipes.includes(rec.id));

  //Cojo el nombre de la categoria
  const catName = MOCK_CATEGORIES.find((cat) => cat.id === id)?.name;

  return (
    <ThemedView safe>
      <ThemedText variant="h1" className="p-4">
        {catName}
      </ThemedText>
      {/* <View className="h-fit w-full flex flex-row flex-wrap justify-between px-4 gap-x-4 "> */}
      {/* COMPONENTE RECETA DESTACADA - TEMATIZADO */}
      {/* {recipes.map((recipe) => (
          <View key={recipe.id} className="pb-2">
            <FeaturedCardRecipe recipe={recipe} />
          </View>
        ))} */}
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        data={recipes}
        renderItem={({ item }) => <FeaturedCardRecipe recipe={item} />}
        contentContainerClassName="px-4"
        columnWrapperClassName="justify-between pb-2"
        //   contentContainerStyle={{ paddingHorizontal: 16 }}
      />
      {/* </View> */}
    </ThemedView>
  );
};

export default CategoryScreen;
