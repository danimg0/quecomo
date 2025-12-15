import ThemedText from '@/components/common/ThemedText';
import ThemedView from '@/components/common/ThemedView';
import ProfileHeader from '@/components/settings/ProfileHeader';
import SettingsOptions from '@/components/settings/SettingsOptions';
import { useAuth } from '@/hooks/auth/useAuth';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

const ProfileScreen = () => {
  const { logout, isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      // Usamos setTimeout para dar tiempo a que el componente se monte correctamente
      // antes de pedirle que se desmonte para navegar.
      const timer = setTimeout(() => {
        router.replace('/auth/login');
      }, 100); // Un pequeño delay (0-100ms) suele bastar

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated || !user) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ThemedView className="items-center p-4" /* safe */>
      <ProfileHeader />
      <View className="p-4" />
      <SettingsOptions />
      <ThemedText onPress={logout} className="mt-10">
        Logout
      </ThemedText>
    </ThemedView>
  );
};

export default ProfileScreen;
