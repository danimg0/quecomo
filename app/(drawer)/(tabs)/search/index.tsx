import ThemedButton from '@/components/common/ThemedButton';
import ThemedText from '@/components/common/ThemedText';
import SelectFilter from '@/components/search/SelectFilter';
import { Checkbox } from 'expo-checkbox';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchScreen = () => {
  return (
    <View className="p-4 h-full">
      <SelectFilter
        title="Tiempo de preparacion"
        filtros={['Menos de 15 min', '15-30 min', '30-60 min', 'Mas de 60 min']}
      />
      <View className="p-4" />
      <SelectFilter
        title="Nivel de dificultad"
        filtros={['Muy Facil', 'Facil', 'Media', 'Dificil']}
      />
      <View className="p-4" />
      <View>
        <ThemedText variant="h2">Dietas y restricciones</ThemedText>
        <View className="gap-y-4 mt-4 flex flex-wrap flex-row p-4 justify-between">
          <View className="flex flex-row gap-2 w-[45%]">
            <Checkbox className="" color={'orange'} value={false} />
            <ThemedText variant="h3" className="font-normal">
              Restriciones
            </ThemedText>
          </View>
          <View className="flex flex-row gap-2 w-[45%]">
            <Checkbox className="" color={'orange'} value={true} />
            <ThemedText variant="h3" className="font-normal">
              Restriciones
            </ThemedText>
          </View>
          <View className="flex flex-row gap-2 w-[45%]">
            <Checkbox className="" color={'orange'} value={false} />
            <ThemedText variant="h3" className="font-normal">
              Restriciones
            </ThemedText>
          </View>
          <View className="flex flex-row gap-2 w-[45%]">
            <Checkbox className="" color={'orange'} value={false} />
            <ThemedText variant="h3" className="font-normal">
              Restriciones
            </ThemedText>
          </View>
        </View>
      </View>
      {/* ThemedSearch */}
      <View>
        <TextInput
          className="border-2 border-gray-300 rounded-full placeholder:text-gray-400 p-4 mt-5"
          value={''}
          placeholder="Buscar"
          onChange={() => {}}
        />
      </View>
      <View className="absolute bottom-5 p-4 left-0 right-0">
        <ThemedButton color="primary" variant="contained">
          Buscar
        </ThemedButton>
      </View>
    </View>
  );
};

export default SearchScreen;
