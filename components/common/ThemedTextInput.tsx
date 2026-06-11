import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Colors } from '@/utils/constants';

interface Props extends TextInputProps {
  className?: string;
  /** Clases extra para la tarjeta que envuelve el input */
  containerClassName?: string;
}

// Input con la tarjeta blanca/oscura estándar de la app.
const ThemedTextInput = ({
  className,
  containerClassName,
  ...rest
}: Props) => {
  return (
    <View
      className={twMerge(
        'bg-white dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 p-4 rounded-lg shadow-sm',
        containerClassName
      )}
    >
      <TextInput
        placeholderTextColor={Colors.muted}
        className={twMerge('text-base text-gray-800 dark:text-gray-100', className)}
        {...rest}
      />
    </View>
  );
};

export default ThemedTextInput;
