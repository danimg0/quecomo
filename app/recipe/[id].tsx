import ThemedText from '@/components/common/ThemedText';
import { useRecipeNav } from '@/core/recipes/store/recipe-nav.store';
import { useAuth } from '@/hooks/auth/useAuth';
import { useFavorites } from '@/hooks/recipes/useFavorites';
import { useRecipe } from '@/hooks/recipes/useRecipe';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

const RecipeDetail = () => {
  const { id } = useLocalSearchParams();
  const recipeId = id as string;

  const selectedRecipe = useRecipeNav((s) => s.selectedRecipe);

  const { recipe } = useRecipe(recipeId, selectedRecipe ?? undefined);

  const { isAuthenticated } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(recipeId);

  const onToggleFavorite = () => {
    // Invitados: pedimos login antes de poder guardar favoritos
    if (!isAuthenticated) {
      router.push('/auth/login');
      return;
    }
    toggleFavorite(recipeId);
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
              color={fav ? 'red' : 'gray'}
              size={25}
              onPress={onToggleFavorite}
            />
          ),
        }}
      />

      <ScrollView>
        {recipe ? (
          <>
            <Image
              source={recipe.photoUrl}
              style={{ width: '100%', height: 140 }}
            />
            <View className="mx-4 mt-4">
              <View className="flex flex-row items-baseline gap-4">
                <ThemedText variant="h1">{recipe.title}</ThemedText>
                <View className="flex flex-row gap-1 items-center">
                  <Ionicons name="watch-outline" />
                  <ThemedText className="text-sm text-gray-500">
                    {recipe?.duration} min
                  </ThemedText>
                </View>
              </View>
              <ThemedText className="mb-4">{recipe.description}</ThemedText>
              <ThemedText variant="h2" className="mb-2">
                Pasos
              </ThemedText>
              <View className="gap-3">
                {recipe.steps.map((step, index) => (
                  <View key={index} className="flex flex-row gap-3">
                    <View className="w-6 h-6 rounded-full bg-orange-500 items-center justify-center">
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
          <ThemedText>404</ThemedText>
        )}
      </ScrollView>
    </>
  );
};

export default RecipeDetail;
