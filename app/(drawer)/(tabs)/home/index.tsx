import CategoriesDisplay from '@/components/recipe/CategoriesDisplay';
import FeaturedRecipes from '@/components/recipe/FeaturedRecipes';
import { ScrollView, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView>
      <View>
        <View className="flex-1">
          {/* EXPLORAR POR CATEGORIAS */}
          <CategoriesDisplay />

          {/* SEPARADOR */}
          <View className="m-2" />

          <FeaturedRecipes />
        </View>
      </View>
    </ScrollView>
  );
}
