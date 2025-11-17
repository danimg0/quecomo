import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { View } from 'react-native';

const sizeMap = {
  s: 50,
  m: 100,
  l: 180,
};

interface Props {
  edit?: boolean;
  imageUrl: string;
  size?: keyof typeof sizeMap;
}

const Avatar = ({ edit = false, size = 'm', imageUrl }: Props) => {
  const finalSize = sizeMap[size];
  return (
    <View>
      <Image
        source={imageUrl}
        contentFit="cover"
        style={{ width: finalSize, height: finalSize, borderRadius: 100 }}
      />
      {edit && (
        <View className="rounded-full p-2 bg-orange-400 absolute bottom-0 right-5">
          <Ionicons name="pencil-outline" color={'white'} size={20} />
        </View>
      )}
    </View>
  );
};

export default Avatar;
