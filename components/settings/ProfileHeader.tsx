import { useAuth } from '@/hooks/auth/useAuth';
import React from 'react';
import { View } from 'react-native';
import ThemedText from '../common/ThemedText';
import Avatar from './Avatar';

const ProfileHeader = () => {
  const { user } = useAuth();

  return (
    <View className="flex items-center gap-4">
      <Avatar
        size="l"
        edit
        imageUrl="https://picsum.photos/seed/654/3000/2000"
      />
      <ThemedText variant="h1">{user?.username}</ThemedText>
    </View>
  );
};

export default ProfileHeader;
