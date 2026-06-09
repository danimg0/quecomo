import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import ThemedText from '../common/ThemedText';

// TODO: cablear con GET /user/favs (action pendiente) y FavoriteCard.
// De momento muestra un estado vacío seguro para no romper la pantalla.
const FavoritesDisplay = () => {
  return (
    <View className="flex-1 items-center justify-center gap-4 px-8 pt-20">
      <Ionicons name="heart-outline" size={56} color="#9CA3AF" />
      <ThemedText className="text-center text-gray-500">
        Aún no tienes recetas favoritas. Pulsa el corazón en una receta para
        guardarla aquí.
      </ThemedText>
    </View>
  );
};

export default FavoritesDisplay;
