import React from 'react';
import { View } from 'react-native';
import ThemedText from '../themed/ThemedText';

interface Props {
  title: string;
  filtros: string[]; //tipo de filtro, ver bien como pasar que representa cada cosa despues
}

const SelectFilter = (props: Props) => {
  return (
    <View>
      <ThemedText variant="h2">{props.title}</ThemedText>
      <View className="flex flex-wrap flex-row gap-4 justify-between mt-4">
        {props.filtros.map((filtro) => (
          <View
            key={filtro}
            className="bg-orange-200 rounded-lg p-4 w-[47%] h-fit"
          >
            <ThemedText variant="h3" className="text-center font-normal">
              {filtro}
            </ThemedText>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SelectFilter;
