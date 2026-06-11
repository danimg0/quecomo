import FeaturedRecipes from '@/components/recipe/FeaturedRecipes';
import { View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1">
      <FeaturedRecipes />
    </View>
  );
}
