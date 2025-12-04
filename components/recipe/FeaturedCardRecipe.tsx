import { Recipe } from '@/core/recipes/domain/recipe.entity';
import { useRecipeNav } from '@/core/recipes/store/recipe-nav.store';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, useWindowDimensions, View } from 'react-native';
import ThemedText from '../common/ThemedText';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const FeaturedCardRecipe = ({ recipe }: { recipe: Recipe }) => {
  const { width } = useWindowDimensions();

  //Asume 16px de padding a cada lado (32px total) y un hueco (gap) de 16px en el centro
  const cardWidth = (width - 48) / 2; // (ancho total - padding lateral - gap) / 2
  const setSelectedRecipe = useRecipeNav((s) => s.setSelectedRecipe);

  return (
    <Link
      href={`/recipe/${recipe.id}`}
      asChild
      onPress={() => {
        setSelectedRecipe(recipe);
      }}
    >
      <Pressable>
        <View style={{ width: cardWidth }}>
          {/* Props: titulo, dificultad, duracion, foto */}
          <Image
            // source={recipe.photoUrl}
            source={
              'https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE'
            }
            contentFit="cover"
            placeholder={{ blurhash }}
            transition={1000}
            style={{
              width: cardWidth,
              height: cardWidth,
              borderRadius: 16,
              marginBottom: 10,
            }}
          />
          <ThemedText numberOfLines={2} variant="h3">
            {recipe.title}
          </ThemedText>
          <View className="flex flex-row">
            <ThemedText className="text-sm">{recipe.duration} min</ThemedText>
            <ThemedText className="text-sm"> - </ThemedText>
            <ThemedText className="text-sm">{recipe.difficulty}</ThemedText>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default FeaturedCardRecipe;
