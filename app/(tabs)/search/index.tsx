import ThemedButton from '@/components/common/ThemedButton';
import SelectFilter from '@/components/search/SelectFilter';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

// Etiqueta visible -> rango de minutos que se manda al backend
const DURATION_OPTIONS: Record<
  string,
  { minDuration?: number; maxDuration?: number }
> = {
  'Menos de 15 min': { maxDuration: 15 },
  '15-30 min': { minDuration: 15, maxDuration: 30 },
  '30-60 min': { minDuration: 30, maxDuration: 60 },
  'Más de 60 min': { minDuration: 60 },
};

// Etiqueta visible -> enum del backend
const DIFFICULTY_OPTIONS: Record<string, 'EASY' | 'MEDIUM' | 'HARD'> = {
  Fácil: 'EASY',
  Media: 'MEDIUM',
  Difícil: 'HARD',
};

const SearchScreen = () => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState<string>();
  const [difficulty, setDifficulty] = useState<string>();

  const onSearch = () => {
    const range = duration ? DURATION_OPTIONS[duration] : {};
    const params: Record<string, string> = {};

    if (title.trim()) params.title = title.trim();
    if (range.minDuration) params.minDuration = String(range.minDuration);
    if (range.maxDuration) params.maxDuration = String(range.maxDuration);
    if (difficulty) params.difficulty = DIFFICULTY_OPTIONS[difficulty];

    router.push({ pathname: '/search-results', params });
  };

  return (
    <View className="p-4 h-full">
      {/* Texto a buscar */}
      <TextInput
        className="border-2 border-gray-300 dark:border-neutral-700 rounded-full placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-800 dark:text-gray-100 p-4"
        value={title}
        placeholder="Buscar receta por nombre"
        onChangeText={setTitle}
        returnKeyType="search"
        onSubmitEditing={onSearch}
      />

      <View className="p-3" />

      <SelectFilter
        title="Tiempo de preparación"
        filtros={Object.keys(DURATION_OPTIONS)}
        selected={duration}
        onSelect={setDuration}
      />

      <View className="p-3" />

      <SelectFilter
        title="Nivel de dificultad"
        filtros={Object.keys(DIFFICULTY_OPTIONS)}
        selected={difficulty}
        onSelect={setDifficulty}
      />

      <View className="absolute bottom-5 p-4 left-0 right-0">
        <ThemedButton color="primary" variant="contained" onPress={onSearch}>
          Buscar
        </ThemedButton>
      </View>
    </View>
  );
};

export default SearchScreen;
