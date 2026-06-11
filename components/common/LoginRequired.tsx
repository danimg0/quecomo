import { Colors } from '@/utils/constants';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import ThemedButton from './ThemedButton';
import ThemedText from './ThemedText';

interface Props {
  message?: string;
}

// Pantalla que se muestra a los invitados cuando intentan entrar a una
// sección que requiere cuenta (Favoritos, Perfil).
const LoginRequired = ({
  message = 'Inicia sesión para acceder a esta sección',
}: Props) => {
  return (
    <View className="flex-1 items-center justify-center gap-6 px-8">
      <Ionicons name="lock-closed-outline" size={64} color={Colors.primary} />
      <ThemedText variant="h2" className="text-center">
        Necesitas una cuenta
      </ThemedText>
      <ThemedText className="text-center text-gray-500 dark:text-gray-400">
        {message}
      </ThemedText>
      <View className="w-full gap-3">
        <ThemedButton
          color="primary"
          variant="contained"
          onPress={() => router.push('/auth/login')}
        >
          Iniciar sesión
        </ThemedButton>
        <ThemedButton
          color="secondary"
          variant="text-only"
          onPress={() => router.push('/auth/register')}
        >
          Crear cuenta
        </ThemedButton>
      </View>
    </View>
  );
};

export default LoginRequired;
