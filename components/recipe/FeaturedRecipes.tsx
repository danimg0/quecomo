import { useRecipes } from '@/hooks/recipes/useRecipes';
import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import CategoriesDisplay from '../category/CategoriesDisplay';
import ThemedText from '../common/ThemedText';
import FeaturedCardRecipe from './FeaturedCardRecipe';

const FeaturedRecipes = () => {
  const { recipes, recipesQuery, loadNextPage } = useRecipes();

  const renderHeader = () => (
    <View>
      <CategoriesDisplay />
      <View className="m-2" />
      <ThemedText variant="h1" className="mb-4 mt-2">
        ¿Qué pongo de comer?
      </ThemedText>
    </View>
  );

  // if (loading) return <ActivityIndicator />;

  return (
    <View>
      {/* COMPONENTE RECETA DESTACADA - TEMATIZADO */}
      {!recipes ? (
        <View>
          <ThemedText>No hay recetas</ThemedText>
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={renderHeader}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          data={recipes}
          renderItem={({ item }) =>
            item ? <FeaturedCardRecipe recipe={item} /> : null
          }
          contentContainerClassName="px-4"
          columnWrapperClassName="justify-between pb-2"
          //Infinity scroll
          onEndReached={() => {
            loadNextPage();
          }}
          onEndReachedThreshold={0.8} // carga cuando falte la mitad de la pantalla
          //Spiner de carga para la siguiente pagina
          ListFooterComponent={
            recipesQuery.isFetchingNextPage ? (
              <ActivityIndicator
                size="large"
                color="blue"
                style={{ margin: 20 }}
              />
            ) : null
          }
        />
      )}
    </View>
  );
};

export default FeaturedRecipes;
