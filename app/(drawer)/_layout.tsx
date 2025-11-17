import { Drawer } from 'expo-router/drawer';
import React from 'react';

const DrawerLayout = () => {
  return (
    <Drawer screenOptions={{}}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Inicio',
          headerShown: false,
        }}
      />
      <Drawer.Screen name="settings/index" options={{ title: 'Ajustes' }} />
    </Drawer>
  );
};

export default DrawerLayout;
