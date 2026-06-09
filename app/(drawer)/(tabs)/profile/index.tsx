import LoginRequired from '@/components/common/LoginRequired';
import ThemedText from '@/components/common/ThemedText';
import ThemedView from '@/components/common/ThemedView';
import ProfileHeader from '@/components/settings/ProfileHeader';
import SettingsOptions from '@/components/settings/SettingsOptions';
import { useAuth } from '@/hooks/auth/useAuth';
import React from 'react';
import { View } from 'react-native';

const ProfileScreen = () => {
  const { logout, isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user) {
    return <LoginRequired message="Inicia sesión para ver tu perfil" />;
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
