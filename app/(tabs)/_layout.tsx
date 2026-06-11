import { Colors } from '@/utils/constants';
import { Ionicons } from '@expo/vector-icons';
import { router, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        // El resto de colores (fondo, texto, bordes) vienen del ThemeProvider
        tabBarActiveTintColor: Colors.primary,
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
          // Engranaje para abrir Ajustes (visible también para invitados)
          headerRight: () => (
            <Pressable
              onPress={() => router.push('/settings')}
              className="pr-4"
              hitSlop={8}
            >
              <Ionicons
                name="settings-outline"
                size={22}
                color={Colors.muted}
              />
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}
