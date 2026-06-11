import { Category } from '@/core/categories/domain/category.entity';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import ThemedText from '../common/ThemedText';

const CategoryCard = ({ category }: { category: Category }) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 48) / 2; // (ancho total - padding lateral - gap) / 2

  return (
    <Link
      // Pasamos también el nombre para que la pantalla pinte el título sin otra petición
      href={{
        pathname: '/category/[id]',
        params: { id: category.id, name: category.name },
      }}
    >
      <View className="relative">
        <Image
          source={category.imageUrl}
          contentFit="cover"
          placeholder={{}}
          transition={1000}
          style={{ width: cardWidth, height: cardWidth / 2, borderRadius: 16 }}
        />
        <View
          className="absolute inset-0 bg-black/30 rounded-2xl"
          style={{ width: cardWidth }}
        />
        <ThemedText
          variant="h2"
          className="text-white absolute bottom-4 left-4 z-10"
        >
          {category.name}
        </ThemedText>
      </View>
    </Link>
  );
};

export default CategoryCard;
