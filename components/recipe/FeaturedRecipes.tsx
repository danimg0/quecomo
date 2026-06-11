import { useRecipes } from '@/hooks/recipes/useRecipes';
import { Colors } from '@/utils/constants';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import CategoriesDisplay from '../category/CategoriesDisplay';
import ThemedButton from '../common/ThemedButton';
import ThemedSpinner from '../common/ThemedSpinner';
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

  // Primera carga
  if (recipesQuery.isLoading) {
    return <ThemedSpinner fullScreen />;
  }

  // Error de red: mensaje + reintentar
  if (recipesQuery.isError) {
    return (
      <View className="flex-1 items-center justify-center gap-4 px-10">
        <Ionicons name="cloud-offline-outline" size={48} color={Colors.muted} />
        <ThemedText className="text-center text-gray-500 dark:text-gray-400">
          No se pudieron cargar las recetas. Revisa tu conexión.
        </ThemedText>
        <ThemedButton
          color="primary"
          variant="contained"
          onPress={() => recipesQuery.refetch()}
        >
          Reintentar
        </ThemedButton>
      </View>
    );
  }

  return (
    <View>
      {/* COMPONENTE RECETA DESTACADA - TEMATIZADO */}
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
        ListEmptyComponent={
          <ThemedText className="text-center text-gray-500 dark:text-gray-400 mt-6">
            No hay recetas todavía.
          </ThemedText>
        }
        // Pull-to-refresh
        refreshControl={
          <RefreshControl
            refreshing={
              recipesQuery.isRefetching && !recipesQuery.isFetchingNextPage
            }
            onRefresh={() => recipesQuery.refetch()}
            tintColor={Colors.primary}
            colors={[Colors.primary]}
          />
        }
        //Infinity scroll
        onEndReached={() => {
          loadNextPage();
        }}
        onEndReachedThreshold={0.8} // carga cuando falte la mitad de la pantalla
        //Spiner de carga para la siguiente pagina
        ListFooterComponent={
          recipesQuery.isFetchingNextPage ? (
            <ThemedSpinner style={{ margin: 20 }} />
          ) : null
        }
      />
    </View>
  );
};

export default FeaturedRecipes;
