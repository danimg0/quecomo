import React from 'react';
import { View } from 'react-native';
import ThemedText from '../themed/ThemedText';
import Avatar from './Avatar';

const ProfileHeader = () => {
  return (
    <View className="flex items-center gap-4">
      <Avatar
        size="l"
        edit
        imageUrl="https://picsum.photos/seed/654/3000/2000"
      />
      <ThemedText variant="h1">Elena Ramirez</ThemedText>
    </View>
  );
};

export default ProfileHeader;
