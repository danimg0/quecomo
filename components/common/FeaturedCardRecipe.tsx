import { Recipe } from '@/types/recipe.type';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import ThemedText from '../themed/ThemedText';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const FeaturedCardRecipe = ({ recipe }: { recipe: Recipe }) => {
  const { width } = useWindowDimensions();

  //Asume 16px de padding a cada lado (32px total) y un hueco (gap) de 16px en el centro
  const cardWidth = (width - 48) / 2; // (ancho total - padding lateral - gap) / 2

  return (
    <Link href={`/recipe/${recipe.id}`}>
      <View>
        {/* Props: titulo, dificultad, duracion, foto */}
        <Image
          source={recipe.photoUrl}
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
        <ThemedText variant="h3">{recipe.title}</ThemedText>
        <View className="flex flex-row">
          <ThemedText className="text-sm">{recipe.duration} min</ThemedText>
          <ThemedText className="text-sm"> - </ThemedText>
          <ThemedText className="text-sm">{recipe.difficulty}</ThemedText>
        </View>
      </View>
    </Link>
  );
};

export default FeaturedCardRecipe;
