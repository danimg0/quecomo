import { MOCK_CATEGORIES } from '@/utils/mock-data';
import React from 'react';
import { View } from 'react-native';
import CategoryCard from '../common/CategoryCard';
import ThemedText from '../themed/ThemedText';

const CategoriesDisplay = () => {
  const catData = MOCK_CATEGORIES;

  return (
    <View className="w-full ">
      <ThemedText variant="h1" className="ml-4 mt-4">
        Categorías
      </ThemedText>
      <View className="flex justify-between flex-row flex-wrap gap-y-4 p-4">
        {catData.map((cat) => (
          <View key={cat.id} className="w-[48%]">
            <CategoryCard category={cat} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default CategoriesDisplay;
