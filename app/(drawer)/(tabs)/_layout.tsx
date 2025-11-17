import { Ionicons } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#010101',
        // Componente automatico. Detecta el drawer padre y se estiliza solo
        headerLeft: () => <DrawerToggleButton />,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Recetas fáciles',
          //El color de aqui, se pasa cuando tocamos las cosas en el screenoptions del tabs
          tabBarIcon({ color, size }) {
            return <Ionicons name="home" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          title: 'Buscar',
          tabBarIcon({ color, size }) {
            return <Ionicons name="search" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favoritos',
          tabBarIcon({ color = 'red', size, focused }) {
            const iconColor = focused ? 'red' : color;

            return <Ionicons name="heart" color={iconColor} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
          tabBarIcon({ color, size }) {
            return <Ionicons name="person" color={color} size={size} />;
          },
        }}
      />
    </Tabs>
  );
}
