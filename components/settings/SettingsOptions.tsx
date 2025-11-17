import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import ThemedText from '../themed/ThemedText';

const options = [
  {
    id: 1,
    name: 'Editar perfil',
    icon: <Ionicons name="person" color={'orange'} size={20} />,
  },
  {
    id: 2,
    name: 'Tamaño fuente',
    icon: <Ionicons name="text" color={'orange'} size={20} />,
  },
  {
    id: 3,
    name: 'Notificaciones',
    icon: <Ionicons name="notifications" color={'orange'} size={20} />,
  },
  {
    id: 4,
    name: 'Ayuda',
    icon: <Ionicons name="help" color={'orange'} size={20} />,
  },
];

const SettingsOptions = () => {
  return (
    <View className="w-full gap-y-4 ">
      {options.map((item) => (
        <View
          key={item.id}
          className="w-full p-4 bg-white rounded-lg flex flex-row justify-between items-center"
        >
          <View className="flex flex-row gap-x-4 items-center ">
            <View className="rounded-full bg-orange-100 p-4">{item.icon}</View>
            <ThemedText variant="h3">{item.name}</ThemedText>
          </View>
          <Ionicons name="arrow-forward-outline" size={20} />
        </View>
      ))}
    </View>
  );
};

export default SettingsOptions;
