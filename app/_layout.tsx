import { useSettingsStore } from '@/store/useSettingsStore';
import { Colors } from '@/utils/constants';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import '../global.css';

const queryClient = new QueryClient();

// Temas de React Navigation (headers, tab bar, drawer, fondos de pantalla)
const LightNavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.light.background,
    card: Colors.light.card,
    text: Colors.light.text,
    border: Colors.light.border,
  },
};

const DarkNavTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: Colors.primary,
    background: Colors.dark.background,
    card: Colors.dark.card,
    text: Colors.dark.text,
    border: Colors.dark.border,
  },
};

// Aqui se cargan las fuentes y lo que sea necesario al principio. Es donde entra antes que nada la app

export default function RootLayout() {
  // Preferencia guardada del usuario (system | light | dark)
  const themePreference = useSettingsStore((s) => s.theme);
  // colorScheme es el tema EFECTIVO ya resuelto ('light' | 'dark')
  const { colorScheme, setColorScheme } = useColorScheme();

  // Sincroniza NativeWind con la preferencia (con 'system' sigue al móvil)
  useEffect(() => {
    setColorScheme(themePreference);
  }, [themePreference, setColorScheme]);

  const isDark = colorScheme === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={isDark ? DarkNavTheme : LightNavTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="auth" />
        </Stack>
        {/* Screens, tab y recipe/[id], options tocadas en cada ruta */}
        <StatusBar style={isDark ? 'light' : 'dark'} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
