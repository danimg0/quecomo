import ThemedSpinner from '@/components/common/ThemedSpinner';
import ThemedText from '@/components/common/ThemedText';
import { useRecipeNav } from '@/core/recipes/store/recipe-nav.store';
import { useAuth } from '@/hooks/auth/useAuth';
import { useFavorites } from '@/hooks/recipes/useFavorites';
import { useRecipe } from '@/hooks/recipes/useRecipe';
import { Colors } from '@/utils/constants';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

const RecipeDetail = () => {
  const { id } = useLocalSearchParams();
  const recipeId = id as string;

  const selectedRecipe = useRecipeNav((s) => s.selectedRecipe);

  // Solo usamos la receta de navegación si es LA MISMA que se está abriendo;
  // si no, sembraríamos la caché con una receta equivocada.
  const initialRecipe =
    selectedRecipe?.id === recipeId ? selectedRecipe : undefined;

  const { recipe, isLoading } = useRecipe(recipeId, initialRecipe);

  const { isAuthenticated } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(recipeId);

  const onToggleFavorite = () => {
    // Invitados: pedimos login antes de poder guardar favoritos
    if (!isAuthenticated) {
      router.push('/auth/login');
      return;
    }
    if (!recipe) return;

    // Feedback háptico + actualización optimista (el corazón cambia al instante)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleFavorite(recipe);
  };

  return (
    <>
      {/* Asi se configura el header solo aqui */}
      <Stack.Screen
        options={{
          headerShown: true,
          title: recipe?.title || 'Receta', // Pone el título de la receta en el header
          headerRight: () => (
            <Ionicons
              name={fav ? 'heart' : 'heart-outline'}
              color={fav ? 'red' : Colors.muted}
              size={25}
              onPress={onToggleFavorite}
            />
          ),
        }}
      />

      <ScrollView>
        {isLoading ? (
          <ThemedSpinner className="mt-16" />
        ) : recipe ? (
          <>
            <Image
              source={recipe.photoUrl}
              style={{ width: '100%', height: 140 }}
            />
            <View className="mx-4 mt-4 mb-8">
              <View className="flex flex-row items-baseline gap-4">
                <ThemedText variant="h1">{recipe.title}</ThemedText>
                <View className="flex flex-row gap-1 items-center">
                  <Ionicons name="watch-outline" color={Colors.muted} />
                  <ThemedText className="text-sm text-gray-500 dark:text-gray-400">
                    {recipe?.duration} min
                  </ThemedText>
                </View>
              </View>
              <ThemedText className="mb-4">{recipe.description}</ThemedText>

              {/* Ingredientes con cantidades — lo esencial para ir a comprar */}
              {recipe.ingredients.length > 0 ? (
                <>
                  <ThemedText variant="h2" className="mb-2">
                    Ingredientes
                  </ThemedText>
                  <View className="mb-4 rounded-lg bg-white dark:bg-neutral-900 px-4 py-1">
                    {recipe.ingredients.map((ing) => (
                      <View
                        key={ing.id}
                        className="flex-row justify-between border-b border-gray-100 dark:border-neutral-800 py-3"
                      >
                        <ThemedText>{ing.name}</ThemedText>
                        <ThemedText className="text-gray-500 dark:text-gray-400">
                          {ing.quantity} {ing.unit}
                        </ThemedText>
                      </View>
                    ))}
                  </View>
                </>
              ) : null}

              <ThemedText variant="h2" className="mb-2">
                Pasos
              </ThemedText>
              <View className="gap-3">
                {recipe.steps.map((step, index) => (
                  <View key={index} className="flex flex-row gap-3">
                    <View className="w-6 h-6 rounded-full bg-primary items-center justify-center">
                      <ThemedText className="text-white">
                        {index + 1}
                      </ThemedText>
                    </View>
                    <ThemedText className="flex-1 text-xl">{step}</ThemedText>
                  </View>
                ))}
              </View>
            </View>
          </>
        ) : (
          <View className="items-center gap-3 px-8 pt-16">
            <Ionicons name="alert-circle-outline" size={48} color={Colors.muted} />
            <ThemedText className="text-center text-gray-500 dark:text-gray-400">
              No se encontró la receta.
            </ThemedText>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default RecipeDetail;
