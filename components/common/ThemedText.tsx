import React from 'react';
import { Text, TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

// Mapa de estilos
const variantMap = {
  h1: 'text-2xl font-bold text-gray-900 dark:text-gray-50',
  h2: 'text-xl font-bold text-gray-800 dark:text-gray-100',
  h3: 'text-lg font-bold text-gray-800 dark:text-gray-100',
  body: 'text-base text-gray-700 dark:text-gray-300', // text-base es el 16px estándar
};

interface Props extends TextProps {
  //typeof: te dice el tipo de plano que es (tiene un h1 que es string, un h2 que es string, etc. No da valor)
  //keyof: solo funciona sobre tipos. Coge un plano, y da un nuevo tipo, que en este caso es los nombres de las claves
  // Mediante esta forma, nos ahorramos escribir cada tipo a mano y se si anaden mas, no hay que anadirlo despues
  variant?: keyof typeof variantMap; // 'h1' | 'h2' | 'h3' | 'body'
  className?: string;
}

const ThemedText = ({
  variant = 'body',
  className = '',
  children, // lo que va dentro del text
  ...rest // resto de los textprops
}: Props) => {
  const baseStyle = variantMap[variant];

  const finalClassName = twMerge(baseStyle, className);
  return (
    <Text className={`${finalClassName}`} {...rest}>
      {children}
    </Text>
  );
};

export default ThemedText;
