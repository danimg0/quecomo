import { Recipe } from '@/types/recipe.type';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import ThemedText from '../themed/ThemedText';

const FavoriteCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <View className="h-fit rounded-lg bg-white w-full">
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
