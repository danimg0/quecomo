import ProfileHeader from '@/components/settings/ProfileHeader';
import SettingsOptions from '@/components/settings/SettingsOptions';
import ThemedView from '@/components/themed/ThemedView';
import React from 'react';
import { View } from 'react-native';

const ProfileScreen = () => {
  return (
    <ThemedView className="items-center p-4" safe>
      <ProfileHeader />
      <View className="p-4" />
      <SettingsOptions />
    </ThemedView>
  );
};

export default ProfileScreen;
