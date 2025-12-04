import { useCategories } from '@/hooks/category/useCategories';
import React from 'react';
import { View } from 'react-native';
import ThemedText from '../common/ThemedText';
import CategoryCard from './CategoryCard';

const CategoriesDisplay = () => {
  const { categories } = useCategories();

  return (
    <View className="w-full">
      <ThemedText variant="h1" className="my-4">
        Categorías
      </ThemedText>
      <View className="flex justify-between flex-row ">
        {!categories ? (
          <ThemedText>No hay categorias</ThemedText>
        ) : (
          categories.map((cat) => (
            <View key={cat.id} className="w-[48%]">
              <CategoryCard category={cat} />
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default CategoriesDisplay;
