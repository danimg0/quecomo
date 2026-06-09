import React from 'react';
import { ActivityIndicator, Modal, Pressable, View } from 'react-native';
import ThemedButton from './ThemedButton';
import ThemedText from './ThemedText';

interface Props {
  visible: boolean;
  title: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  destructive?: boolean;
  loading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

// Modal de confirmación reutilizable (tarjeta centrada sobre fondo oscuro).
const ThemedModal = ({
  visible,
  title,
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  destructive = false,
  loading = false,
  onConfirm,
  onCancel,
}: Props) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      {/* Pulsar fuera cierra el modal */}
      <Pressable
        onPress={onCancel}
        className="flex-1 items-center justify-center bg-black/50 px-8"
      >
        {/* Tarjeta: el onPress vacío evita que se cierre al pulsar dentro */}
        <Pressable
          onPress={() => {}}
          className="w-full gap-4 rounded-2xl bg-white p-6"
        >
          <ThemedText variant="h2" className="text-center">
            {title}
          </ThemedText>

          {message ? (
            <ThemedText className="text-center text-gray-500">
              {message}
            </ThemedText>
          ) : null}

          {loading ? (
            <ActivityIndicator size="large" color="#f97316" className="my-2" />
          ) : (
            <View className="mt-2 gap-3">
              <ThemedButton
                color={destructive ? 'danger' : 'primary'}
                variant="contained"
                onPress={onConfirm}
              >
                {confirmText}
              </ThemedButton>
              <ThemedButton
                color="secondary"
                variant="text-only"
                onPress={onCancel}
              >
                {cancelText}
              </ThemedButton>
            </View>
          )}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ThemedModal;
