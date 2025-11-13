import React from 'react';
import { View, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends ViewProps {
  className?: string;
  marginHorizontal?: boolean;
  safe?: boolean;
  bgColor?: string;
}

const ThemedView = ({
  className,
  marginHorizontal = false,
  safe = false,
  children,
  ...rest
}: Props) => {
  const Component = safe ? SafeAreaView : View;

  return (
    <Component
      className={`flex-1 ${marginHorizontal ? 'mx-4' : ''} ${safe ? '' : ''} ${className} `}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default ThemedView;
