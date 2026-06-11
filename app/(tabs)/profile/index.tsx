import LoginRequired from '@/components/common/LoginRequired';
import ThemedText from '@/components/common/ThemedText';
import ThemedView from '@/components/common/ThemedView';
import ProfileHeader from '@/components/settings/ProfileHeader';
import { useAuth } from '@/hooks/auth/useAuth';
import { useFavorites } from '@/hooks/recipes/useFavorites';
import { Colors } from '@/utils/constants';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

const ProfileScreen = () => {
  const { isAuthenticated, user } = useAuth();
  const { favorites } = useFavorites();

  if (!isAuthenticated || !user) {
    return <LoginRequired message="Inicia sesión para ver tu perfil" />;
  }

  return (
    <ThemedView className="items-center p-4">
      <ProfileHeader />

      <View className="w-full mt-6 gap-3">
        {/* Email de la cuenta */}
        <View className="w-full flex-row items-center gap-x-4 rounded-lg bg-white dark:bg-neutral-900 p-4">
          <View className="rounded-full bg-orange-100 dark:bg-neutral-800 p-3">
            <Ionicons name="mail-outline" color={Colors.primary} size={20} />
          </View>
          <ThemedText variant="h3" className="font-normal">
            {user.email}
          </ThemedText>
        </View>

        {/* Recetas favoritas */}
        <View className="w-full flex-row items-center gap-x-4 rounded-lg bg-white dark:bg-neutral-900 p-4">
          <View className="rounded-full bg-orange-100 dark:bg-neutral-800 p-3">
            <Ionicons name="heart-outline" color={Colors.primary} size={20} />
          </View>
          <ThemedText variant="h3" className="font-normal">
            {favorites.length}{' '}
            {favorites.length === 1 ? 'receta favorita' : 'recetas favoritas'}
          </ThemedText>
        </View>
      </View>

      <ThemedText className="mt-8 text-sm text-gray-400 dark:text-gray-500">
        Gestiona tu cuenta desde el icono ⚙️ de arriba
      </ThemedText>
    </ThemedView>
  );
};

export default ProfileScreen;
