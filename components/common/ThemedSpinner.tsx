import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native';
import { Colors } from '@/utils/constants';

interface Props extends ActivityIndicatorProps {
  /** Centra el spinner ocupando todo el espacio disponible */
  fullScreen?: boolean;
  className?: string;
}

// Spinner de carga con el color de marca. Úsalo en vez de ActivityIndicator.
const ThemedSpinner = ({
  size = 'large',
  color = Colors.primary,
  fullScreen = false,
  className,
  ...rest
}: Props) => {
  const spinner = (
    <ActivityIndicator size={size} color={color} className={className} {...rest} />
  );

  if (fullScreen) {
    return (
      <View className="flex-1 items-center justify-center">{spinner}</View>
    );
  }

  return spinner;
};

export default ThemedSpinner;
