import { Recipe } from '@/core/recipes/domain/recipe.entity';
import { useRecipeNav } from '@/core/recipes/store/recipe-nav.store';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import ThemedText from '../common/ThemedText';

const FavoriteCard = ({ recipe }: { recipe: Recipe }) => {
  const setSelectedRecipe = useRecipeNav((s) => s.setSelectedRecipe);

  return (
    <Link
      href={`/recipe/${recipe.id}`}
      // Igual que en Home: pasamos la receta para que el detalle abra al instante
      onPress={() => setSelectedRecipe(recipe)}
    >
      <View className="h-fit rounded-lg bg-white dark:bg-neutral-900 w-full">
        <View className="flex flex-row items-center justify-between p-2">
          <View className="flex flex-row gap-x-4">
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 8,
              }}
              source={recipe.photoUrl}
            />
            <View className="flex flex-col mt-2">
              <ThemedText variant="h2">{recipe.title}</ThemedText>
              <ThemedText>{recipe.duration} minutos</ThemedText>
            </View>
          </View>

          <Ionicons name="arrow-forward" size={30} color={'gray'} />
        </View>
      </View>
    </Link>
  );
};

export default FavoriteCard;
