import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import '../global.css';

const queryClient = new QueryClient();

// const theme = {
//   colors: {
//     primary: 'tomato',
//     secondary: 'yellow',
//   },
// };

// Aqui se cargan las fuentes y lo que sea necesario al principio. Es donde entra antes que nada la app

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth" />
      </Stack>
      {/* Screens, tab y recipe/[id], options tocadas en cada ruta */}
    </QueryClientProvider>
  );
}
