import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import { twMerge } from 'tailwind-merge';
import ThemedText from './ThemedText';

const colorMap = {
  primary: 'bg-orange-500',
  secondary: 'bg-orange-300',
  tertiary: 'bg-orange-200',
};

interface Props extends PressableProps {
  children: string;
  className?: string;
  variant: 'contained' | 'text-only';
  color: keyof typeof colorMap;
}

const ThemedButton = ({
  children,
  className,
  color = 'primary',
  variant = 'contained',
}: Props) => {
  const finalClassName = twMerge(className, colorMap[color]);

  if (variant === 'text-only') {
    return (
      <Pressable
        className={`w-ful rounded-lg p-4 ${finalClassName} bg-transparent`}
      >
        <ThemedText className="text-white text-center ">{children}</ThemedText>
      </Pressable>
    );
  }

  return (
    <Pressable className={`w-ful rounded-lg p-4  ${finalClassName}`}>
      <ThemedText className="text-white text-center" variant="h3">
        {children}
      </ThemedText>
    </Pressable>
  );
};

export default ThemedButton;
