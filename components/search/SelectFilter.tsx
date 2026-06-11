import React from 'react';
import { Pressable, View } from 'react-native';
import ThemedText from '../common/ThemedText';

interface Props {
  title: string;
  filtros: string[];
  selected?: string;
  // Pulsar el filtro ya seleccionado lo deselecciona (devuelve undefined)
  onSelect: (filtro?: string) => void;
}

const SelectFilter = ({ title, filtros, selected, onSelect }: Props) => {
  return (
    <View>
      <ThemedText variant="h2">{title}</ThemedText>
      <View className="flex flex-wrap flex-row gap-4 justify-between mt-4">
        {filtros.map((filtro) => {
          const isSelected = selected === filtro;
          return (
            <Pressable
              key={filtro}
              onPress={() => onSelect(isSelected ? undefined : filtro)}
              className={`rounded-lg p-4 w-[47%] h-fit ${
                isSelected ? 'bg-primary' : 'bg-orange-200 dark:bg-neutral-800'
              }`}
            >
              <ThemedText
                variant="h3"
                className={`text-center font-normal ${
                  isSelected ? 'text-white' : ''
                }`}
              >
                {filtro}
              </ThemedText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default SelectFilter;
